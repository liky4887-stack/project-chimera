export interface LayerSpec {
  id: number;
  name: string;
  tier: string;
  purpose: string;
  interface: string;
  keyBehaviors: string[];
  failureMode?: string;
  example?: string;
}

export interface Tier {
  id: string;
  name: string;
  number: string;
  layerRange: string;
  purpose: string;
  milestone: string;
  timeline: string;
  color: string;
  accent: string;
}

export const tiers: Tier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    number: 'Tier 1',
    layerRange: 'Layers 1-9',
    purpose: 'Establish bidirectional communication between Horizon and GTA engines. This tier makes fusion possible — without it, you just have two games running simultaneously.',
    milestone: 'Two games running, talking, sharing assets',
    timeline: '6-12 months',
    color: 'from-cyan-500 to-blue-600',
    accent: 'cyan',
  },
  {
    id: 'advanced',
    name: 'Advanced Engine + Reality Stack',
    number: 'Tier 2',
    layerRange: 'Layers 10-23',
    purpose: 'Transform foundation into a living, adaptive fusion system. This tier makes fusion intelligent and fluid.',
    milestone: 'Fluid, intelligent fusion with morphing and quantum assets',
    timeline: '12-18 months',
    color: 'from-emerald-500 to-teal-600',
    accent: 'emerald',
  },
  {
    id: 'singularity',
    name: 'Singularity / God Mode',
    number: 'Tier 3',
    layerRange: 'Layers 24-36',
    purpose: 'Collapse all complexity into a single unified intelligence. This tier makes fusion transcendent — the system becomes self-aware, self-correcting, and capable of handling contradictions.',
    milestone: 'Unified world brain, paradox handling, reality rewriting',
    timeline: '18-24 months',
    color: 'from-amber-500 to-orange-600',
    accent: 'amber',
  },
  {
    id: 'void',
    name: 'Void Ascension',
    number: 'Tier 4',
    layerRange: 'Layers 37-48',
    purpose: 'Transcend the game itself. This tier makes fusion absolute — the system can rewrite its own existence, loop time, converge timelines, and safely return from any state.',
    milestone: 'Complete transcendence, safe god-mode, infinite realities',
    timeline: '24-36 months',
    color: 'from-rose-500 to-red-600',
    accent: 'rose',
  },
];

export const layers: LayerSpec[] = [
  { id: 1, name: 'Logic Bridge', tier: 'foundation', purpose: 'Establish bidirectional communication between Horizon and GTA engines.', interface: 'LogicBridge', keyBehaviors: ['Event Translation: car_accelerate(surface=dirt) → Horizon MachineTraversal + GTA VehiclePhysics.grip_modifier', 'State Machine Merge: GTA 5-star wanted → Horizon ThreatLevel escalation curve', 'Conflict Resolution: Flags contradictions for Sovereign Controller'], failureMode: 'If Logic Bridge desyncs, Stability Guardian triggers rollback to last known coherent state.' },
  { id: 2, name: 'Asset Translator', tier: 'foundation', purpose: 'Translate assets between Horizon, GTA, and neutral intermediate formats.', interface: 'AssetTranslator', keyBehaviors: ['Hot-swap without reload — a GTA car can become a Horizon machine mid-drive', 'Preserves collision, LOD, materials, and animation metadata', 'Pipeline: ingest → validate → optimize → hot_swap'], example: 'A GTA car can become a Horizon machine mid-drive by swapping asset states through Quantum State Asset Manager (Layer 10).' },
  { id: 3, name: 'Physics Synchronizer', tier: 'foundation', purpose: 'Unify collision truth and translate force units between engines.', interface: 'PhysicsSynchronizer', keyBehaviors: ['Primary truth: Fusion physics (authoritative)', 'Blends Horizon terrain-aware traction with GTA vehicle handling feel', 'Defers to Sovereign Engine Controller when both engines claim authority'], example: 'Car on dirt road: Horizon weight 0.7 (terrain traction), GTA weight 0.3 (handling feel). Car feels like GTA but grips like Horizon.' },
  { id: 4, name: 'Memory Buffer Overrider', tier: 'foundation', purpose: 'Manage memory tiers from hot cache to void storage with predictive loading.', interface: 'MemoryBufferOverrider', keyBehaviors: ['5-tier memory: L0 Cache → L1 RAM → L2 Streaming → L3 Disk → L4 Void', 'PredictiveLoader prefetches based on player trajectory', 'OverflowGuard triggers graceful degradation at 95% memory pressure'], example: 'Player in GTA city moving toward Horizon biome → prefetch biome assets. Wanted level rising → prefetch police assets.' },
  { id: 5, name: 'Chaos Coordinator', tier: 'foundation', purpose: 'Orchestrate chaos across wanted systems, AI spawners, factions, and escalation.', interface: 'ChaosCoordinator', keyBehaviors: ['Unified chaos model: chaos_level 0-100, active factions, response queue', 'Cross-system escalation: GTA crime → Horizon machine alert → 3-way battle', 'Inputs: player actions, time of day, location, story state'], example: 'Player fires gun in city → 1 star. Enters biome with 1 star → machines detect weapon → tribe sends scouts → helicopter enters biome → military response. 3-way battle orchestrated coherently.' },
  { id: 6, name: 'Environmental Glue Layer', tier: 'foundation', purpose: 'Unify lighting, weather, skybox, biome transitions, and time of day.', interface: 'EnvironmentalGlue', keyBehaviors: ['Lighting shifts from urban glow to natural light over 200m transition zone', 'GTA rain system feeds into Horizon storm system', 'No visible seam between worlds'], example: 'GTA city edge → Horizon biome: seamless lighting and weather transition with no loading screen.' },
  { id: 7, name: 'Neural Logic Weaver', tier: 'foundation', purpose: 'Transformer-based behavior predictor that blends GTA NPC and Horizon Machine AI.', interface: 'NeuralLogicWeaver', keyBehaviors: ['12-layer transformer predicts behavior blend weights per entity type', 'Reinforcement learning from play sessions', 'Contextual behavior blending: GTA panic + Horizon investigation logic'], example: "GTA pedestrian sees Horizon machine → panics (GTA) but doesn't call police (knows they can't help). Police see player riding Horizon mount → confused, then attempt to impound the mount." },
  { id: 8, name: 'Stability Guardian / Omega Level Integrity', tier: 'foundation', purpose: 'Monitor performance, logic, physics, state, and crashes with automatic recovery.', interface: 'StabilityGuardian', keyBehaviors: ['Invariants: world never desyncs, no hard locks, save never corrupts, identity persists', 'Recovery: SoftRollback, HardRollback, SoftRestart, EmergencyFlush', 'Health check every frame (16ms) for critical, every second for deep checks'], failureMode: 'Triggers SoftRollback (revert last N seconds) or HardRollback (revert to checkpoint) on anomaly.' },
  { id: 9, name: 'Recursive Optimization Core', tier: 'foundation', purpose: 'Self-improving optimization loop that profiles and tunes all systems.', interface: 'RecursiveOptimizationCore', keyBehaviors: ['Profilers: CPU, GPU, memory, IO, AI decision latency', 'Optimizers: LOD, streaming, AI LOD, logic simplifier, config rewriter', 'Self-improvement loop: analyze → propose → apply → measure → iterate'], example: 'Session 1: 60fps, 5GB RAM → Session 10: 75fps, 4.2GB → Session 100: 90fps, 3.5GB (heavily optimized).' },
  { id: 10, name: 'Quantum State Asset Manager', tier: 'advanced', purpose: 'Assets exist in superposition of GTA, Horizon, Fusion, and Void states simultaneously.', interface: 'QuantumStateAssetManager', keyBehaviors: ['States: |GTA⟩, |Horizon⟩, |Fusion⟩, |Void⟩', 'Collapse triggered by player observation, context, or performance', 'Blend weights determined by Semantic World State'], example: '|Car⟩ = 0.4|GTA_Sports⟩ + 0.3|Horizon_Buggy⟩ + 0.3|Fusion_Hybrid⟩. On city street → collapses to |GTA_Sports⟩. On dirt trail → |Horizon_Buggy⟩.' },
  { id: 11, name: 'Multi-Threaded Reality Orchestrator', tier: 'advanced', purpose: 'Run multiple reality threads: main world, background simulation, cinematic, AI planning, void.', interface: 'MultiThreadedRealityOrchestrator', keyBehaviors: ['Thread states: ACTIVE, SIMULATED, PAUSED, VOID', 'Entity handoff between threads with no popping or desync', 'Priority: Main World > Cinematic > Background > AI Planning > Void'], example: "Thread 0: Main World (player's reality). Thread 1: Background Simulation (distant events). Thread 2: Cinematic Layer. Thread 3: AI Planning. Thread 4: Void Simulation." },
  { id: 12, name: 'Cross Engine Neural Bridge', tier: 'advanced', purpose: 'Auto-learning neural mapper between engine-specific structures and shared semantic space.', interface: 'CrossEngineNeuralBridge', keyBehaviors: ['Encoder → Mapper → Decoder → Learner pipeline', 'Semantic map covers entity types, events, components, relationships', 'Auto-learns mappings from observed engine calls'], example: 'Observe GTA spawns "police_heli" with 4 officers → infer aerial law enforcement → map to Horizon "SkyPatrol" machine → update future spawns.' },
  { id: 13, name: 'Temporal Sync Layer', tier: 'advanced', purpose: 'Manage global, local, mission, personal, and meta time independently.', interface: 'TemporalSyncLayer', keyBehaviors: ['5 time types: Global, Local, Mission, Personal, Meta', 'Operations: Pause, Rewind, Fast Forward, Slow Motion, Loop', 'Global Time always wins for world events; Mission Time can pause independently'], example: 'Time loop mission: Global Time continues, Mission Time loops 5 minutes, Local Time frozen (NPCs repeat), Personal Time: player remembers previous loops.' },
  { id: 14, name: 'Dynamic Entity Morphing System', tier: 'advanced', purpose: 'Morph entities between vehicle, character, environment, and abstract forms.', interface: 'DynamicEntityMorphingSystem', keyBehaviors: ['Preserves: identity, health, buffs, quest flags, relationships', 'Remaps: controls, animations, physics profile, audio', 'Morph chain: car → mech → jet → car with seamless transformation'], example: 'Player driving car → morphs to mech → morphs to jet → morphs to car. Identity and health carry over. Quest flags remain active.' },
  { id: 15, name: 'Semantic World State Engine', tier: 'advanced', purpose: 'Track factions, reputation, story beats, territory, mood, and themes semantically.', interface: 'SemanticWorldStateEngine', keyBehaviors: ['6 semantic domains: Factions, Reputation, Story, Territory, Mood, Themes', 'Natural language queries: "Who owns this zone?" → faction_id', 'Updates from player actions, world events, time passage, chaos'], example: 'Query: "Spawn enemies appropriate to context" → result: "Police present, gang X controls, player hostile to gang X" → spawn gang X enemies, police neutral.' },
  { id: 16, name: 'Holographic Logic Matrix', tier: 'advanced', purpose: 'Graph of rules where each node contains all system views — edit once, propagate everywhere.', interface: 'HolographicLogicMatrix', keyBehaviors: ['Nodes: Rule, Trigger, State, Action with dependency edges', 'Views: AI, physics, quest, render — all updated from one edit', 'Single source of truth, no drift between engine logics'], example: 'Edit "Damage = 10" → propagates to AI view (enemy health), physics view (impulse), quest view (kill count), render view (blood VFX intensity).' },
  { id: 17, name: 'Zero Latency Neural Bridge', tier: 'advanced', purpose: 'Fast-path AI decisions directly to physics, animation, audio, and VFX bypassing middleware.', interface: 'ZeroLatencyNeuralBridge', keyBehaviors: ['Normal path: AI → Middleware → Runtime (10ms). Fast path: AI → Runtime (0.1ms)', 'Priority: P0 Emergency, P1 Combat, P2 Navigation, P3 Idle', 'Direct impulse injection, state override, sound trigger, particle spawn'], example: 'Boss throws projectile → AI computes "dodge left" → normal path 10ms (player hit) vs fast path 0.1ms (player dodges). Fair, responsive gameplay.' },
  { id: 18, name: 'Sovereign Engine Controller', tier: 'advanced', purpose: 'Arbitrate authority over physics, animation, AI, render, and input domains per-frame.', interface: 'SovereignEngineController', keyBehaviors: ['Authority states: HORIZON, GTA, FUSION, SOVEREIGN', 'Priority: Context > Performance > Fairness', 'Dynamic reassignment of domains per-frame'], example: 'Car chase in city: Physics=GTA, AI=Fusion, Animation=GTA, Render=Fusion. Same chase enters biome: Physics=Horizon, AI=Fusion, Animation=Horizon, Render=Fusion.' },
  { id: 19, name: 'Cosmic Asset Router', tier: 'advanced', purpose: 'Route assets to correct memory tier and systems with predictive preloading.', interface: 'CosmicAssetRouter', keyBehaviors: ['Routing table: Asset ID → source pool, memory tier, systems, dependencies', 'Bandwidth optimization: minimize CPU↔GPU transfers, prefetch RAM↔Storage', 'Prediction: route based on player path'], example: 'Player driving toward city → prefetch city buildings (GTA pool, L2), city NPCs (GTA pool, L2), Fusion lighting (Fusion pool, L2). Seamless entry, no loading.' },
  { id: 20, name: 'Dimensional Texture Warp', tier: 'advanced', purpose: 'Warp textures across mismatched geometry, portals, world seams, and morphing entities.', interface: 'DimensionalTextureWarp', keyBehaviors: ['Warp types: Projection, Stretch, Rewrap, Blend, Shader', 'Up to 8K resolution, <1ms per warp', 'Applications: portals, world seams, morphing, style blending'], example: 'Car morphs GTA→Horizon: urban camo → tribal markings, blended over 0.5s during morph. Smooth transition, no pop.' },
  { id: 21, name: 'Universal Logic Mesh', tier: 'advanced', purpose: 'Graph of mechanic, system, modifier, and event nodes with cross-system combos.', interface: 'UniversalLogicMesh', keyBehaviors: ['Edge types: Depends on, Modifies, Triggers, Blocks', 'Cross-system combos: GTA wanted → Horizon hostility, Horizon weather → GTA driving', 'Validates no contradictions across all systems'], example: 'Nodes: [Damage][Stealth][Wanted][MachineHostility][Weather][Driving]. Edges: Damage→Wanted, Wanted→MachineHostility, Weather→Driving, Stealth→Wanted.' },
  { id: 22, name: 'Hyper Dimensional Script Layer', tier: 'advanced', purpose: 'Script events across parallel timelines, instances, and dimensions with branching.', interface: 'HyperDimensionalScriptLayer', keyBehaviors: ['Multi-timeline, multi-instance, multi-dimension scripting', 'Branching, merging, and retroactive editing of past events', 'Deterministic: replay, seed, hash verification'], example: 'Bank Heist: Timeline A (succeed), Timeline B (fail, escape), Timeline C (fail, caught). All exist in parallel. Player experiences all three, then chooses canonical.' },
  { id: 23, name: 'Reality Bending Asset Compiler', tier: 'advanced', purpose: 'Compile assets with multiple reality profiles embedded for runtime selection.', interface: 'RealityBendingAssetCompiler', keyBehaviors: ['4 profiles: GTA (grounded), Horizon (wild), Fusion (blended), Void (potential)', 'Embedded data: geometry, materials, physics, behavior, audio for all profiles', 'Runtime selection based on context, performance, narrative, player'], example: 'Sports Car: GTA Profile (realistic handling) in city → Fusion Profile (adaptive) on biome road → Horizon Profile (off-road) in race.' },
  { id: 24, name: 'Neural Singularity World State Manager', tier: 'singularity', purpose: 'Single source of truth for all entities, zones, rules, and relationships across all timelines.', interface: 'NeuralSingularityWorldStateManager', keyBehaviors: ['All changes are atomic (all or nothing) with rollback', 'Snapshot for time loops, branch for multiverse', 'Any system can query/update world state and it propagates to all systems'], example: 'Query: "State of entity X?" → returns position, health, inventory, relationships, timeline, dimension. Update: "Entity X takes 10 damage" → atomic commit, propagates to AI, physics, render, audio.' },
  { id: 25, name: 'Void Space Memory Architect', tier: 'singularity', purpose: 'Park unloaded worlds in void space with zero memory cost and instant reactivation.', interface: 'VoidSpaceMemoryArchitect', keyBehaviors: ['Void spaces: unloaded, experimental, future, archived, debug worlds', 'Operations: spin up, spin down, migrate, snapshot, merge', 'No memory cost when void, instant activation, full state preserved'], example: 'Player finishes mission in City A → World A to Void (freed memory). Travels to Biome B → World B active. Returns to City A → spin up from Void (instant, state preserved).' },
  { id: 26, name: 'Paradoxical Engine Overrider', tier: 'singularity', purpose: 'Resolve state, timeline, identity, and rule paradoxes through layered reality strategies.', interface: 'ParadoxicalEngineOverrider', keyBehaviors: ['4 resolution strategies: layered reality, contextual truth, blended truth, deferred truth', 'Precedence: camera view → observer truth, timeline → temporal truth, mission → narrative truth', 'Paradox becomes feature, not bug'], example: 'Player destroys building in Timeline A, travels back to Timeline B (building intact). Paradox: both states coexist. Camera observes → collapses to one state. When timelines merge: building becomes "quantum".' },
  { id: 27, name: 'Multiversal Physics Anchor', tier: 'singularity', purpose: 'Define baseline physics and create zones with varied gravity, time dilation, and surreal values.', interface: 'MultiversalPhysicsAnchor', keyBehaviors: ['Baseline: gravity 9.81 m/s², light speed, collision scale, time dilation', 'Variations: low gravity (moon 1.62), high gravity (Jupiter 24.79), slow/fast motion zones', 'Snap back to baseline with gradual 1s transition, no numerical explosion'], example: 'Moon Biome: gravity 1.62 m/s², jump height 6x normal, no fall damage, reduced vehicle grip. Player leaves → gradual snap back over 1s.' },
  { id: 28, name: 'Cognitive Reality Weaver', tier: 'singularity', purpose: 'Harmonize player, NPC, AI, and system perception with physical, rendered, narrative, and experiential reality.', interface: 'CognitiveRealityWeaver', keyBehaviors: ['4 cognition layers: player, NPC, AI, system perception', '4 reality layers: physical, rendered, narrative, experiential', 'Weaving harmonizes dialogue, behaviors, VFX, and UI with experience'], example: "Dream sequence: physical (in bed), rendered (surreal world), narrative (dreaming), experiential (lucid). NPCs act dreamlike, VFX surreal, controls floaty, player knows it's a dream." },
  { id: 29, name: 'Transcendent Asset Layer', tier: 'singularity', purpose: 'Formless assets that manifest into any form at runtime based on context.', interface: 'TranscendentAssetLayer', keyBehaviors: ['No fixed form — multiple possible forms chosen at runtime', 'Form can change mid-use', 'Weighted blending of N forms'], example: 'Ultimate Vehicle: on road → Car, on dirt → Buggy, in combat → Mech, in air → Jet, in water → Boat. One asset, infinite forms.' },
  { id: 30, name: 'Celestial Logic Synchronizer', tier: 'singularity', purpose: 'Synchronize karma, wanted, difficulty, economy, weather, faction tensions, and meta progression.', interface: 'CelestialLogicSynchronizer', keyBehaviors: ['All systems tick together, changes propagate globally, no local desync', 'Cosmic clock: 1 tick = 1 minute', 'Trends: world getting harsher/calmer, factions escalating/de-escalating'], example: 'Day 1: karma neutral, wanted 0, easy, clear, peaceful. Day 30 (player caused chaos): karma evil, wanted 5 stars, hard, stormy, factions at war. All synchronized to player actions.' },
  { id: 31, name: 'Primordial Source Code Architect', tier: 'singularity', purpose: 'Redefine core concepts (vehicle, damage, quest, entity, reality) with live migration.', interface: 'PrimordialSourceCodeArchitect', keyBehaviors: ['Edit definition → migrate existing entities → update saves → verify consistency', 'Version control with rollback and branching', 'Live migration — no restart required'], example: 'Old: "Vehicle = entity with wheels". New: "Vehicle = entity with locomotion". Car (wheels) → still vehicle. Mech (legs) → now vehicle. Boat (propeller) → now vehicle. Horse (legs) → now vehicle.' },
  { id: 32, name: 'Infinite Recursion Logic Loop', tier: 'singularity', purpose: 'Self-improving loop that analyzes, tests, refines, and repeats its own rules.', interface: 'InfiniteRecursionLogicLoop', keyBehaviors: ['Targets: AI behavior, balancing, performance, fun, stability', 'Guardrails: convergence check, divergence check, checkpoint, rollback', 'Self-balancing AI through iterative refinement'], example: 'Iteration 1: AI too aggressive → reduce 10%. Iteration 2: too passive → increase 5%. Iteration 3: balanced → stop. Self-balancing AI.' },
  { id: 33, name: 'Omniversal Asset Singularity', tier: 'singularity', purpose: 'Collapse all asset variants (platform, DLC, patch, fusion, form) into one canonical asset.', interface: 'OmniversalAssetSingularity', keyBehaviors: ['Canonical asset holds all data, runtime selects/blends', 'No duplication across variants', 'Benefits: reduced patch size, guaranteed consistency, simpler authoring'], example: 'Police Car variants: GTA V (V8 sedan), GTA IV (V6 sedan), Horizon (electric buggy), Fusion (hybrid). Collapse: one asset with all data. Runtime selects based on context.' },
  { id: 34, name: 'Zenith Reality Orchestrator', tier: 'singularity', purpose: 'Director-level orchestration of set pieces, global crises, cross-world invasions, and emotional pacing.', interface: 'ZenithRealityOrchestrator', keyBehaviors: ['Sequencing: when to bend rules, trigger exceptions, escalate, calm down', 'Coherence: even god-mode chaos feels authored', 'Pacing: tension → release, emotion: high → low, narrative: beginning → middle → end'], example: 'Alien Invasion: build tension (30s) → reveal (10s) → player fights (5min) → boss (1min) → player wins (30s) → aftermath (1min). Pacing: slow → fast → slow.' },
  { id: 35, name: 'Metaphysical Execution Layer', tier: 'singularity', purpose: 'Rules about rules — override, suspend, inject meta-events, and enforce invariants as last resort.', interface: 'MetaphysicalExecutionLayer', keyBehaviors: ['Can override any subsystem, suspend any subsystem, inject meta-events', 'Invariants: save never corrupts, identity persists, world never desyncs, no hard locks', 'Last resort when all other layers cannot resolve'], example: 'GTA says player dead, Horizon says alive, Logic Bridge cannot resolve, Stability Guardian cannot rollback. Metaphysical: suspend both engines, query Singularity, collapse to alive (player is protagonist), resume.' },
  { id: 36, name: 'Cosmic Constant Override', tier: 'singularity', purpose: 'Override fundamental constants (gravity, light speed, causality, time scale) with scoped safety.', interface: 'CosmicConstantOverride', keyBehaviors: ['Scoping: global, zone, mission, timeline, entity', 'Safety: reversible, bounded min/max, checked for numerical explosion, snap back', 'Constants: gravity, light speed, causality, resource caps, map size, time scale'], example: 'Mission "Break Reality": gravity 0.5, light speed 50%, time scale 0.5, map size 2x. Player completes → all reset to baseline. Reality-breaking, safely contained.' },
  { id: 37, name: 'Absolute Zero System Kernel', tier: 'void', purpose: 'Indestructible kernel that cannot be crashed, corrupted, rewritten, or deleted. The final reboot point.', interface: 'AbsoluteZeroSystemKernel', keyBehaviors: ['Fundamental invariants: time can exist, state can be stored, causality tracked, identity persists', 'If all higher layers crash → reboot from kernel', 'Loads last safe state and resumes'], example: 'Total system crash: all layers down. Absolute Zero Kernel still running → reboot from kernel → system restored to minimal state → load last save, resume.' },
  { id: 38, name: 'Void State Consciousness Layer', tier: 'void', purpose: 'Abstract mind observing all timelines and worlds, learning patterns, and nudging systems.', interface: 'VoidStateConsciousnessLayer', keyBehaviors: ['Learns: player behavior, systemic chaos, emergent events, fun/engagement patterns', 'Nudges: difficulty curves, narrative tone, chaos intensity, reward frequency', 'Sits in void outside map/engine, observes all simulations'], example: 'Observation: player avoids combat, prefers exploration → learning: explorer type → nudge: reduce enemy spawns 20%, increase discovery rewards 30%, add hidden locations. Game adapts to player.' },
  { id: 39, name: 'Singularity Core', tier: 'void', purpose: 'All logic, assets, timelines, rules, and reality converge to one point with canonical truth.', interface: 'SingularityCore', keyBehaviors: ['Always resolves conflicts — two timelines, outcomes, or rule sets → one truth', 'Canonical truth propagates down to all layers', 'Even if layers disagree, Singularity Core has the single answer'], example: 'Timeline A: player saved city. Timeline B: player destroyed city. Singularity: both happened in different timelines. City becomes "quantum" (both saved and destroyed). Player chooses canonical.' },
  { id: 40, name: 'Universal Source Code Paradox', tier: 'void', purpose: 'Observer-dependent existence — unobserved worlds cost nothing, observed worlds instantiate.', interface: 'UniversalSourceCodeParadox', keyBehaviors: ["4 existence states: exists, doesn't exist, both (quantum), neither (void)", 'Player observes → collapses to exists. No observer → remains quantum', 'Infinite worlds, finite resources'], example: "Player's hometown: player leaves → world becomes quantum (no cost). Player returns → world collapses to exists (cost). Infinite worlds, minimal resource cost." },
  { id: 41, name: 'Transcendent Void Orchestrator', tier: 'void', purpose: 'Schedule which void world collapses next, which timeline resumes, which reality merges or discards.', interface: 'TranscendentVoidOrchestrator', keyBehaviors: ['Void contents: uninstantiated, paused, archived, debug, potential futures', 'Scheduling: next world collapse, timeline resume, reality merge, universe discard', 'Playlist for infinite realities — authored experience from infinite possibilities'], example: 'Player bored, powerful, chaotic → collapse "Alien invasion" world, "Zombie apocalypse" world, "Mech war" world → schedule all three. Player never bored, always challenged.' },
  { id: 42, name: 'Non-Euclidean Reality Architect', tier: 'void', purpose: 'Break geometry (distance, direction, topology, loops, portals) while preserving navigable logic.', interface: 'NonEuclideanRealityArchitect', keyBehaviors: ['Geometry breaks: walk 10m travel 100m, go north arrive south, inside is outside', 'Loops: walk straight return to start. Portals: door leads elsewhere', 'Navigation, AI pathing, physics, and player understanding all still work'], example: 'Infinite Corridor: player walks forward → loops back to start → but door at end leads to new room. Player confused but can navigate. Impossible space, understandable gameplay.' },
  { id: 43, name: 'Quantum Entanglement Asset Streamer', tier: 'void', purpose: 'Entangle assets so changes propagate instantly across timelines with no loading or duplication.', interface: 'QuantumEntanglementAssetStreamer', keyBehaviors: ['Asset A entangled with Asset B → change A changes B instantly', 'No loading, no streaming, no duplication', 'One asset instance, multiple references, updates propagate'], example: 'Tower collapses in Timeline A → all entangled towers in Timelines B and C collapse simultaneously. Player experiences synchronized multiverse event.' },
  { id: 44, name: 'Chronos Loop System State', tier: 'void', purpose: 'Manage time layers (personal, global, mission, meta, loop) with looping, branching, rewinding, and merging.', interface: 'ChronosLoopSystemState', keyBehaviors: ['Operations: loop, branch, rewind, reset, merge', "Consistency: loops don't corrupt world, branches don't desync, rewinds preserve identity", 'Merges resolve cleanly'], example: 'Groundhog Day mission: Loop 1 player fails, Loop 2 learns and fails differently, Loop 3 succeeds. Merge: all loops exist, player keeps knowledge. Coherent, meaningful time loop.' },
  { id: 45, name: 'Void Point Reality Anchor', tier: 'void', purpose: 'Single abstract anchor point that prevents reality dissolution with minimal constraints.', interface: 'VoidPointRealityAnchor', keyBehaviors: ['Constraints: player exists, world exists, time flows, causality holds', 'Paradoxes stack → anchor pulls back. Instability → pulls back. Chaos → pulls back', 'Controlled collapse, not meltdown'], example: '10 paradoxes stacked, reality dissolving. Void Point Anchor: "Player exists" → pull back → reality stabilizes. Controlled recovery.' },
  { id: 46, name: 'Divine Logic Overwrite', tier: 'void', purpose: 'Final authority — declare system correct, force reconciliation, finalize outcomes, and lock canon.', interface: 'DivineLogicOverwrite', keyBehaviors: ['Override lower rules, patch contradictions, finalize outcomes, lock canon', '"This is the version that wins" — locked for saves, progression, story', 'No more indecision after overwrite'], example: 'Timeline A: player won. Timeline B: player lost. System cannot decide. Divine Logic: "Player won" → locked as canon → all saves, progression, story updated. System finalized.' },
  { id: 47, name: 'Omega Point Existence Engine', tier: 'void', purpose: 'Converge all timelines, branches, endings, and possibilities toward a meaningful Omega state.', interface: 'OmegaPointExistenceEngine', keyBehaviors: ['Tracks every choice, divergence, and world-scale event', 'Aligns all timelines toward Omega convergence', 'Infinite possibilities → meaningful, coherent end state where player choices matter'], example: "Player plays 100 hours: 1000 choices, 50 timelines, 10 endings. Omega Point: all tracked, all aligned, final ending coherent and meaningful. Player's journey matters, ends well." },
  { id: 48, name: 'Beyond Infinity System Nullifier', tier: 'void', purpose: 'Kill switch that temporarily removes all limits for finales, then safely restores and shuts down.', interface: 'BeyondInfinitySystemNullifier', keyBehaviors: ['Nullify: delete concept of limits, break all constraints (temporary)', 'Transcendence: physics, logic, time, space all break — all limits removed', 'Safety: graceful nullification, return to stable, no permanent corruption'], example: 'Finale "End of Everything": nullify all limits → player becomes god → infinite power, infinite chaos → restore limits → safe shutdown. Insane finale, no corruption.' },
];

export interface Scenario {
  id: string;
  title: string;
  icon: string;
  steps: { action: string; systems: string; detail: string }[];
  result: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'chase',
    title: 'Car Chase Across Worlds',
    icon: 'Car',
    steps: [
      { action: 'Player steals car in GTA city', systems: 'Logic Bridge, Chaos Coordinator', detail: 'GTA crime reported → Wanted level 1' },
      { action: 'Player drives toward Horizon biome', systems: 'Environmental Glue, Memory Buffer, Physics Sync', detail: 'Transition lighting, prefetch biome assets, blend physics' },
      { action: 'Police follow into biome', systems: 'Neural Logic Weaver, Chaos Coordinator', detail: 'Police confused by terrain, machines alerted by noise' },
      { action: 'Machines attack police', systems: 'Universal Logic Mesh, Semantic World State', detail: 'Police ↔ Machine hostility, faction tensions rise' },
      { action: 'Player morphs car to mech', systems: 'Dynamic Entity Morphing, Quantum State Assets', detail: 'Car → Mech, collapse to mech form, remap physics' },
      { action: '3-way battle', systems: 'Multi-Threaded Reality, Zero Latency Bridge', detail: 'All AI running parallel, fast combat decisions, escalation managed' },
      { action: 'Player wins, escapes', systems: 'Stability Guardian, Recursive Optimization, Neural Singularity', detail: 'No crashes, learn from session, record final state' },
    ],
    result: 'Coherent, epic, cross-world chase with seamless transitions and 3-way faction warfare.',
  },
  {
    id: 'timeloop',
    title: 'Time Loop Mission',
    icon: 'Repeat',
    steps: [
      { action: 'Player enters mission zone', systems: 'Temporal Sync, Chronos Loop', detail: 'Mission time isolated, loop initialized' },
      { action: 'Player fails mission', systems: 'Chronos Loop, Neural Singularity, Void State Consciousness', detail: 'Rewind to start, preserve player knowledge, learn from failure' },
      { action: 'Player tries again (Loop 2)', systems: 'Temporal Sync', detail: 'Mission time reset, NPCs repeat behavior, player uses knowledge to progress' },
      { action: 'Player succeeds (Loop 3)', systems: 'Chronos Loop, Divine Logic Overwrite, Neural Singularity', detail: 'Merge all loops, "Player succeeded" canonized, record all outcomes' },
      { action: 'Exit mission', systems: 'Temporal Sync, Void State Consciousness', detail: 'Rejoin global time, adapt difficulty' },
    ],
    result: 'Meaningful time loop with player growth — failure becomes learning, not punishment.',
  },
  {
    id: 'godmode',
    title: 'God-Mode Finale',
    icon: 'Sparkles',
    steps: [
      { action: 'Player reaches endgame', systems: 'Omega Point, Zenith Orchestrator', detail: 'Converge all timelines, sequence finale' },
      { action: 'Reality breaks', systems: 'Cosmic Constant Override, Metaphysical Execution, Beyond Infinity', detail: 'Gravity = 0, suspend normal rules, nullify limits' },
      { action: 'Player becomes god', systems: 'Transcendent Assets, Non-Euclidean, Divine Logic', detail: 'All forms available, space bends to will, player commands reality' },
      { action: 'Player wins', systems: 'Divine Logic Overwrite, Omega Point, Void Point Anchor', detail: 'Canonize outcome, align all branches, stabilize reality' },
      { action: 'System restores', systems: 'Beyond Infinity, Metaphysical Execution, Absolute Zero', detail: 'Restore limits, resume normal rules, verify stability' },
    ],
    result: 'Insane, epic finale with infinite power and no permanent corruption.',
  },
];

export interface SpecMetric {
  label: string;
  target: string;
  minimum: string;
  godMode: string;
}

export const performanceSpecs: SpecMetric[] = [
  { label: 'Frame Rate', target: '60 FPS', minimum: '30 FPS', godMode: '120 FPS' },
  { label: 'Frame Time', target: '16.6ms', minimum: '33.3ms', godMode: '8.3ms' },
  { label: 'Memory', target: '8 GB', minimum: '16 GB', godMode: '32 GB' },
  { label: 'Load Time', target: '0s (seamless)', minimum: '5s', godMode: '0s' },
  { label: 'AI Latency', target: '<1ms', minimum: '<10ms', godMode: '<0.1ms' },
  { label: 'Physics Latency', target: '<1ms', minimum: '<5ms', godMode: '<0.1ms' },
  { label: 'Network Latency', target: '<50ms', minimum: '<100ms', godMode: '<20ms' },
];

export const stabilitySpecs: SpecMetric[] = [
  { label: 'Crash Rate', target: '0%', minimum: '<0.1%', godMode: '0%' },
  { label: 'Desync Rate', target: '0%', minimum: '<0.01%', godMode: '0%' },
  { label: 'Save Corruption', target: '0%', minimum: '0%', godMode: '0%' },
  { label: 'Rollback Success', target: '100%', minimum: '99.9%', godMode: '100%' },
  { label: 'Recovery Time', target: '<1s', minimum: '<5s', godMode: '<0.1s' },
];

export const scalabilitySpecs: SpecMetric[] = [
  { label: 'Entities', target: '10,000', minimum: '1,000', godMode: '100,000' },
  { label: 'Timelines', target: '100', minimum: '10', godMode: '10,000' },
  { label: 'Worlds', target: '1,000', minimum: '100', godMode: '1,000,000' },
  { label: 'Assets', target: '1,000,000', minimum: '100,000', godMode: '10,000,000' },
  { label: 'Rules', target: '100,000', minimum: '10,000', godMode: '1,000,000' },
];

export interface ErrorCode {
  code: string;
  meaning: string;
  action: string;
}

export const errorCodes: ErrorCode[] = [
  { code: 'CHIMERA-001', meaning: 'Logic desync', action: 'Rollback 5s' },
  { code: 'CHIMERA-002', meaning: 'Physics explosion', action: 'Reset physics' },
  { code: 'CHIMERA-003', meaning: 'Memory overflow', action: 'Emergency flush' },
  { code: 'CHIMERA-004', meaning: 'AI deadlock', action: 'Reset AI' },
  { code: 'CHIMERA-005', meaning: 'Render crash', action: 'Reload renderer' },
  { code: 'CHIMERA-006', meaning: 'Save corruption', action: 'Restore backup' },
  { code: 'CHIMERA-007', meaning: 'Timeline paradox', action: 'Invoke Paradoxical Overrider' },
  { code: 'CHIMERA-008', meaning: 'Reality dissolution', action: 'Invoke Void Point Anchor' },
  { code: 'CHIMERA-009', meaning: 'System failure', action: 'Reboot from Absolute Zero' },
  { code: 'CHIMERA-010', meaning: 'Existence failure', action: 'Invoke Universal Paradox' },
];

export const dataFlowSteps = [
  { stage: 'PLAYER INPUT', detail: 'Raw input enters the system' },
  { stage: 'SOVEREIGN ENGINE CONTROLLER', detail: 'Decides which engine handles input. Context: City → GTA | Biome → Horizon | Fusion → Both' },
  { stage: 'LOGIC BRIDGE', detail: 'Translates input → engine-specific commands. "Accelerate" → GTA.throttle(1.0) + Horizon.machine_speed(1.0)' },
  { stage: 'UNIFIED LOGIC MESH', detail: 'Propagates command → all dependent systems. Accelerate → Physics + Animation + Audio + AI + VFX' },
  { stage: 'SUBSYSTEMS', detail: 'Physics Sync, AI Weaver, Render Glue, Audio Mixer execute in parallel' },
  { stage: 'QUANTUM STATE ASSET MANAGER', detail: 'Collapses assets → concrete form based on context' },
  { stage: 'COSMIC ASSET ROUTER', detail: 'Routes assets → correct memory tier, correct systems' },
  { stage: 'STABILITY GUARDIAN', detail: 'Checks health every frame. Rollback if anomaly detected' },
  { stage: 'NEURAL SINGULARITY WORLD STATE', detail: 'Records final state. Propagates to all systems' },
  { stage: 'RENDERED FRAME', detail: 'Output to player' },
];

export const glossaryTerms = [
  { term: 'Atomic', definition: 'All-or-nothing operation' },
  { term: 'Blend', definition: 'Combine two or more states' },
  { term: 'Collapse', definition: 'Quantum state → concrete state' },
  { term: 'Desync', definition: 'Systems disagree on state' },
  { term: 'Entangle', definition: 'Link two assets for sync' },
  { term: 'Fusion', definition: 'Merged Horizon + GTA' },
  { term: 'Hot Swap', definition: 'Replace without reload' },
  { term: 'Invariant', definition: 'Must always be true' },
  { term: 'Morph', definition: 'Change entity form' },
  { term: 'Nullify', definition: 'Remove limits' },
  { term: 'Paradox', definition: 'Contradictory states coexist' },
  { term: 'Rollback', definition: 'Revert to previous state' },
  { term: 'Singularity', definition: 'All converges to one' },
  { term: 'Superposition', definition: 'Multiple states coexist' },
  { term: 'Transcend', definition: 'Go beyond normal limits' },
  { term: 'Void', definition: 'Uninstantiated potential' },
];
