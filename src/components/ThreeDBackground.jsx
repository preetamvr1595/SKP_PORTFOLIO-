import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

/* ═══════════════════════════════════════════════════════════════
   Three.js ADVANCED GEOMETRIC BACKGROUND
   ───────────────────────────────────────────────────────────────
   Shapes:
     [1] Icosahedron (glass/refractive main shape with wireframe shell + glow core)
     [2] Torus (metallic orbiting shape)
     [3] Dodecahedron (floating emissive shape with pulsing glow)
     [4] Octahedron Constellation (8 orbiting tetra/octa shapes connected by lines)
     [5] Morphing Shape (cycles: Tetrahedron → Octahedron → Icosahedron → Dodecahedron)
   Effects:
     • UnrealBloomPass post-processing for neon glow
     • 3 orbital rings at different tilt angles
     • 200 ambient floating particles
     • Connection lines between constellation nodes
     • Auto camera orbit + mouse parallax
     • Shape morphing every ~12 seconds
   ═══════════════════════════════════════════════════════════════ */

export default function ThreeDBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    /* ─── SCENE SETUP ─── */
    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 1.5, 8)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.5
    container.appendChild(renderer.domElement)

    /* ─── POST-PROCESSING: BLOOM ─── */
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      0.55, // strength
      0.4,  // radius
      0.85, // threshold
    )
    composer.addPass(bloomPass)

    /* ─── COLOR PALETTE ─── */
    const LIME = new THREE.Color('#CCFF00')
    const LIME_DIM = new THREE.Color('#88aa00')
    const LIME_DARK = new THREE.Color('#445500')

    /* ════════════════════════════════════════════════
       [1] MAIN ICOSAHEDRON — glass / refractive
       ════════════════════════════════════════════════ */
    const icoGeo = new THREE.IcosahedronGeometry(1.2, 1)
    const icoMat = new THREE.MeshPhysicalMaterial({
      color: LIME,
      emissive: LIME,
      emissiveIntensity: 0.05,
      metalness: 0.0,
      roughness: 0.0,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      transmission: 0.35,
      thickness: 1.5,
      ior: 1.5,
    })
    const icoMesh = new THREE.Mesh(icoGeo, icoMat)
    scene.add(icoMesh)

    // Wireframe shell
    const icoWireMat = new THREE.MeshBasicMaterial({
      color: LIME,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    const icoWire = new THREE.Mesh(icoGeo.clone(), icoWireMat)
    icoWire.scale.set(1.08, 1.08, 1.08)
    scene.add(icoWire)

    // Inner glow core
    const coreGeo = new THREE.IcosahedronGeometry(0.5, 0)
    const coreMat = new THREE.MeshBasicMaterial({
      color: LIME,
      transparent: true,
      opacity: 0.3,
    })
    const coreMesh = new THREE.Mesh(coreGeo, coreMat)
    scene.add(coreMesh)

    /* ════════════════════════════════════════════════
       [2] ORBITING TORUS — metallic / shiny
       ════════════════════════════════════════════════ */
    const torusGeo = new THREE.TorusGeometry(0.7, 0.2, 32, 64)
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: LIME,
      emissive: LIME_DIM,
      emissiveIntensity: 0.2,
      metalness: 0.7,
      roughness: 0.2,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    scene.add(torus)

    /* ════════════════════════════════════════════════
       [3] FLOATING DODECAHEDRON — emissive glow
       ════════════════════════════════════════════════ */
    const dodecGeo = new THREE.DodecahedronGeometry(0.5)
    const dodecMat = new THREE.MeshPhysicalMaterial({
      color: LIME,
      emissive: LIME,
      emissiveIntensity: 0.3,
      metalness: 0.3,
      roughness: 0.4,
      transparent: true,
      opacity: 0.6,
    })
    const dodec = new THREE.Mesh(dodecGeo, dodecMat)
    dodec.position.set(2.5, 0.5, -1)
    scene.add(dodec)

    // Dodeca wireframe
    const dodecWireMat = new THREE.MeshBasicMaterial({
      color: LIME,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
    const dodecWire = new THREE.Mesh(dodecGeo.clone(), dodecWireMat)
    dodecWire.scale.set(1.12, 1.12, 1.12)
    dodecWire.position.copy(dodec.position)
    scene.add(dodecWire)

    /* ════════════════════════════════════════════════
       [4] OCTAHEDRON CONSTELLATION (8 nodes)
       ════════════════════════════════════════════════ */
    const OCTA_COUNT = 8
    const octaGroup = new THREE.Group()
    const octaMeshes = []

    const octaGeo = new THREE.OctahedronGeometry(0.18)
    for (let i = 0; i < OCTA_COUNT; i++) {
      const angle = (i / OCTA_COUNT) * Math.PI * 2
      const r = 3.2
      const mat = new THREE.MeshPhysicalMaterial({
        color: LIME,
        emissive: LIME,
        emissiveIntensity: 0.4,
        metalness: 0.5,
        roughness: 0.3,
        transparent: true,
        opacity: 0.55 + Math.random() * 0.3,
      })
      const mesh = new THREE.Mesh(octaGeo.clone(), mat)
      const yOffset = Math.sin(angle * 0.7) * 2
      mesh.position.set(Math.cos(angle) * r, yOffset, Math.sin(angle) * r * 0.5)
      mesh.userData = {
        angle,
        r,
        yOffset,
        speed: 0.18 + Math.random() * 0.25,
        phase: Math.random() * Math.PI * 2,
      }
      octaGroup.add(mesh)
      octaMeshes.push(mesh)
    }
    scene.add(octaGroup)

    /* ─── Constellation connection lines ─── */
    const lineMat = new THREE.LineBasicMaterial({
      color: LIME,
      transparent: true,
      opacity: 0.06,
    })
    // Connect each octa to its neighbours
    const linePairs = []
    for (let i = 0; i < OCTA_COUNT; i++) {
      const p1 = octaMeshes[i].position
      const p2 = octaMeshes[(i + 1) % OCTA_COUNT].position
      const arr = new Float32Array([
        p1.x, p1.y, p1.z,
        p2.x, p2.y, p2.z,
      ])
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
      const line = new THREE.Line(geo, lineMat.clone())
      octaGroup.add(line)
      linePairs.push({ line, idx1: i, idx2: (i + 1) % OCTA_COUNT })
    }
    // Also connect alternating nodes across the ring
    for (let i = 0; i < OCTA_COUNT; i++) {
      const j = (i + 4) % OCTA_COUNT
      if (i < j) {
        const p1 = octaMeshes[i].position
        const p2 = octaMeshes[j].position
        const arr = new Float32Array([
          p1.x, p1.y, p1.z,
          p2.x, p2.y, p2.z,
        ])
        const geo = new THREE.BufferGeometry()
        geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
        const line = new THREE.Line(geo, lineMat.clone())
        octaGroup.add(line)
        linePairs.push({ line, idx1: i, idx2: j })
      }
    }

    /* ════════════════════════════════════════════════
       [5] MORPHING SHAPE — cycles geometry every ~12s
       ════════════════════════════════════════════════ */
    const morphGeos = [
      new THREE.TetrahedronGeometry(0.4),
      new THREE.OctahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.4, 0),
      new THREE.DodecahedronGeometry(0.4),
    ]
    const morphWireGeos = morphGeos.map((g) => g.clone())

    const morphMat_ = new THREE.MeshPhysicalMaterial({
      color: LIME,
      emissive: LIME,
      emissiveIntensity: 0.5,
      metalness: 0.2,
      roughness: 0.3,
      transparent: true,
      opacity: 0.7,
    })
    const morphMesh = new THREE.Mesh(morphGeos[0].clone(), morphMat_)
    morphMesh.position.set(-2.2, -0.8, 0.5)
    scene.add(morphMesh)

    const morphWireMat_ = new THREE.MeshBasicMaterial({
      color: LIME,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    })
    const morphWire = new THREE.Mesh(morphWireGeos[0].clone(), morphWireMat_)
    morphWire.scale.set(1.15, 1.15, 1.15)
    morphWire.position.copy(morphMesh.position)
    scene.add(morphWire)

    let lastMorphIdx = -1

    /* ════════════════════════════════════════════════
       ORBITAL RINGS (3)
       ════════════════════════════════════════════════ */
    const ringConfigs = [
      { radius: 2.8, tiltX: 0, tiltY: 0, tiltZ: 0.3, speed: 0.03 },
      { radius: 3.5, tiltX: 0.5, tiltY: 0.8, tiltZ: 0, speed: -0.04 },
      { radius: 2.0, tiltX: 1.2, tiltY: 0, tiltZ: 0.5, speed: 0.05 },
    ]
    const rings = ringConfigs.map((cfg) => {
      const pts = []
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2
        pts.push(
          new THREE.Vector3(
            Math.cos(theta) * cfg.radius,
            Math.sin(theta) * cfg.radius * 0.3,
            0,
          ),
        )
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineBasicMaterial({
        color: LIME,
        transparent: true,
        opacity: 0.07,
      })
      const line = new THREE.Line(geo, mat)
      line.rotation.set(cfg.tiltX, cfg.tiltY, cfg.tiltZ)
      scene.add(line)
      return { line, speed: cfg.speed, baseOpacity: 0.07 }
    })

    /* ════════════════════════════════════════════════
       PARTICLE FIELD (200)
       ════════════════════════════════════════════════ */
    const PTC = 200
    const ptGeo = new THREE.BufferGeometry()
    const ptPos = new Float32Array(PTC * 3)
    const ptSizes = new Float32Array(PTC)
    const ptOffs = new Float32Array(PTC)

    for (let i = 0; i < PTC; i++) {
      const r = 1.5 + Math.random() * 4.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      ptPos[i * 3] = Math.sin(phi) * Math.cos(theta) * r
      ptPos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r * 0.6
      ptPos[i * 3 + 2] = Math.cos(phi) * r
      ptSizes[i] = 1 + Math.random() * 4
      ptOffs[i] = Math.random() * Math.PI * 2
    }

    // Snapshot original positions for drift-free animation
    const ptOrig = new Float32Array(ptPos)

    ptGeo.setAttribute('position', new THREE.BufferAttribute(ptPos, 3))
    ptGeo.setAttribute('size', new THREE.BufferAttribute(ptSizes, 1))

    const ptMat = new THREE.PointsMaterial({
      color: LIME,
      size: 0.035,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(ptGeo, ptMat)
    scene.add(particles)

    /* ════════════════════════════════════════════════
       MOUSE PARALLAX
       ════════════════════════════════════════════════ */
    const targetRot = { x: 0, y: 0 }
    const currentRot = { x: 0, y: 0 }
    const targetPos = { x: 0, y: 0 }
    const currentPos = { x: 0, y: 0 }

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      targetRot.x = (y - 0.5) * 0.3
      targetRot.y = (x - 0.5) * 0.5
      targetPos.x = (x - 0.5) * 0.5
      targetPos.y = (y - 0.5) * -0.3
    }
    window.addEventListener('mousemove', handleMouseMove)

    /* ─── RESIZE ─── */
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      composer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    /* ════════════════════════════════════════════════
       ANIMATION LOOP
       ════════════════════════════════════════════════ */
    const clock = new THREE.Clock()
    let animationId

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      /* ── Mouse smoothing ── */
      currentRot.x += (targetRot.x - currentRot.x) * 0.03
      currentRot.y += (targetRot.y - currentRot.y) * 0.03
      currentPos.x += (targetPos.x - currentPos.x) * 0.03
      currentPos.y += (targetPos.y - currentPos.y) * 0.03

      /* [1] Icosahedron */
      icoMesh.rotation.x = t * 0.12 + currentRot.x
      icoMesh.rotation.y = t * 0.2 + currentRot.y
      icoWire.rotation.copy(icoMesh.rotation)

      coreMesh.rotation.x = t * 0.15
      coreMesh.rotation.y = t * 0.25
      const corePulse = 1 + Math.sin(t * 1.5) * 0.15
      coreMesh.scale.setScalar(corePulse)
      coreMesh.position.x = Math.sin(t * 0.3) * 0.1
      coreMesh.position.y = Math.sin(t * 0.4) * 0.1

      /* [2] Torus orbit */
      const torA = t * 0.4
      torus.position.set(
        Math.cos(torA) * 2.2,
        Math.sin(torA * 1.3) * 0.8 + 0.5,
        Math.sin(torA) * 1.8,
      )
      torus.rotation.x = t * 0.5
      torus.rotation.y = t * 0.8
      torus.rotation.z = t * 0.3

      /* [3] Dodecahedron */
      dodec.position.x = 2.5 + Math.sin(t * 0.15) * 0.5
      dodec.position.y = 0.5 + Math.sin(t * 0.2) * 0.4
      dodec.position.z = -1 + Math.cos(t * 0.12) * 0.5
      dodec.rotation.x = t * 0.2
      dodec.rotation.y = t * 0.35
      dodec.rotation.z = t * 0.1
      dodecWire.position.copy(dodec.position)
      dodecWire.rotation.copy(dodec.rotation)

      /* [4] Octahedron constellation */
      octaMeshes.forEach((mesh, i) => {
        const d = mesh.userData
        const a = d.angle + t * d.speed
        const r = d.r + Math.sin(t * 0.2 + i) * 0.3
        mesh.position.x = Math.cos(a) * r
        mesh.position.y = Math.sin(a * 0.7 + t * 0.1) * 2
        mesh.position.z = Math.sin(a) * r * 0.5
        mesh.rotation.x = t * 0.5 + i
        mesh.rotation.y = t * 0.7 + i * 2
        const s = 1 + Math.sin(t * 0.5 + i) * 0.15
        mesh.scale.setScalar(s)
        // Material glow pulse
        mesh.material.emissiveIntensity = 0.3 + Math.sin(t * 0.6 + d.phase) * 0.2
      })

      /* ── Update constellation connection lines ── */
      linePairs.forEach(({ line, idx1, idx2 }) => {
        const p1 = octaMeshes[idx1].position
        const p2 = octaMeshes[idx2].position
        const attr = line.geometry.attributes.position
        const arr = attr.array
        arr[0] = p1.x; arr[1] = p1.y; arr[2] = p1.z
        arr[3] = p2.x; arr[4] = p2.y; arr[5] = p2.z
        attr.needsUpdate = true
      })

      /* [5] Morphing shape */
      const morphCycle = t * 0.08
      const morphIdx = Math.floor(morphCycle) % morphGeos.length
      if (morphIdx !== lastMorphIdx) {
        morphMesh.geometry.dispose()
        morphMesh.geometry = morphGeos[morphIdx].clone()
        morphWire.geometry.dispose()
        morphWire.geometry = morphWireGeos[morphIdx].clone()
        lastMorphIdx = morphIdx
      }
      morphMesh.position.x = -2.2 + Math.sin(t * 0.1) * 0.4
      morphMesh.position.y = -0.8 + Math.cos(t * 0.15) * 0.3
      morphMesh.position.z = 0.5 + Math.sin(t * 0.08) * 0.3
      morphMesh.rotation.x = t * 0.3
      morphMesh.rotation.y = t * 0.5
      morphMesh.rotation.z = t * 0.15
      const morphScale = 1 + Math.sin(t * 0.5) * 0.1
      morphMesh.scale.setScalar(morphScale)
      morphWire.position.copy(morphMesh.position)
      morphWire.rotation.copy(morphMesh.rotation)
      morphWire.scale.setScalar(morphScale * 1.15)

      /* Orbital rings */
      rings.forEach((r, i) => {
        r.line.rotation.z += r.speed * 0.1
        r.line.material.opacity =
          r.baseOpacity + Math.sin(t * 0.3 + i) * 0.025
      })

      /* Particles (drift-free) */
      const pos = particles.geometry.attributes.position.array
      for (let i = 0; i < PTC; i++) {
        const off = ptOffs[i]
        pos[i * 3] = ptOrig[i * 3] + Math.sin(t * 0.3 + off) * 0.2
        pos[i * 3 + 1] = ptOrig[i * 3 + 1] + Math.cos(t * 0.25 + off) * 0.2
        pos[i * 3 + 2] = ptOrig[i * 3 + 2] + Math.sin(t * 0.2 + off * 1.5) * 0.15
      }
      particles.geometry.attributes.position.needsUpdate = true

      /* Camera auto-orbit + mouse offset */
      const orbitA = t * 0.03
      camera.position.x = Math.sin(orbitA) * 0.8 + currentPos.x
      camera.position.y = 1.5 + currentPos.y
      camera.position.z = 8 + Math.cos(orbitA) * 0.3
      camera.lookAt(0, 0, 0)

      composer.render()
    }

    animate()

    /* ════════════════════════════════════════════════
       CLEANUP
       ════════════════════════════════════════════════ */
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationId) cancelAnimationFrame(animationId)

      scene.traverse((obj) => {
        if (obj.isMesh || obj.isPoints || obj.isLine) {
          obj.geometry?.dispose()
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose())
          } else {
            obj.material?.dispose()
          }
        }
      })
      morphGeos.forEach((g) => g.dispose())
      morphWireGeos.forEach((g) => g.dispose())
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  )
}
