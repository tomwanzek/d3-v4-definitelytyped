// Type definitions for d3JS d3-force module
// Project: http://d3js.org/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>, Tom Wanzek <https://github.com/tomwanzek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// -----------------------------------------------------------------------
// Force Simulation
// -----------------------------------------------------------------------

// TODO: Review below: fx and fy should be optional as a matter of principle. The other properties, are optional prior to initialization, but once the
// the nodes array is passed into the simulation, will be initialized.
export interface SimulationNodeDatum {
    // NB: index is assigned internally by simulation, once initialized it is defined
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number;
    fy?: number;
}

export interface Simulation<NodeDatum extends SimulationNodeDatum> {
    restart(): Simulation<NodeDatum>;
    stop(): Simulation<NodeDatum>;
    tick(): Simulation<NodeDatum>;
    nodes(): Array<NodeDatum>;
    nodes(nodesData: Array<NodeDatum>): Simulation<NodeDatum>;
    alpha(): number;
    alpha(alpha: number): Simulation<NodeDatum>;
    alphaMin(): number;
    alphaMin(min: number): Simulation<NodeDatum>;
    alphaDecay(): number;
    alphaDecay(decay: number): Simulation<NodeDatum>;
    alphaTarget(): number;
    alphaTarget(target: number): Simulation<NodeDatum>;
    velocityDecay(): number;
    velocityDecay(decay: number): Simulation<NodeDatum>;
    force(name: string): Force<NodeDatum>;
    force(name: string, force: Force<NodeDatum>): Simulation<NodeDatum>;
    find(x: number, y: number, radius?: number): NodeDatum | undefined;
    on(typenames: 'tick' | 'end' | string): (this: Simulation<NodeDatum>) => void;
    on(typenames: 'tick' | 'end' | string, listener: null): Simulation<NodeDatum>;
    on(typenames: 'tick' | 'end' | string, listener: (this: Simulation<NodeDatum>) => void): Simulation<NodeDatum>;
}

export function forceSimulation<NodeDatum extends SimulationNodeDatum>(nodesData?: Array<NodeDatum>): Simulation<NodeDatum>;

// ----------------------------------------------------------------------
// Forces
// ----------------------------------------------------------------------


export interface Force<NodeDatum extends SimulationNodeDatum> {
    (alpha: number): void;
    initialize(nodes: Array<NodeDatum>): void;
}


// Centering ------------------------------------------------------------

export interface ForceCenter<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum> {
    x(): number;
    x(x: number): ForceCenter<NodeDatum>;
    y(): number;
    y(y: number): ForceCenter<NodeDatum>;
}

export function forceCenter<NodeDatum extends SimulationNodeDatum>(x?: number, y?: number): ForceCenter<NodeDatum>;

// Collision ------------------------------------------------------------

export interface ForceCollide<NodeDatum extends SimulationNodeDatum> extends Force<NodeDatum> {
    radius(): (node: NodeDatum, i: number, nodes: Array<NodeDatum>) => number;
    radius(radius: number): ForceCollide<NodeDatum>;
    radius(radius: (node: NodeDatum, i?: number, nodes?: Array<NodeDatum>) => number): ForceCollide<NodeDatum>;
    strength(): number;
    strength(strength: number): ForceCollide<NodeDatum>;
    iterations(): number;
    iterations(iterations: number): ForceCollide<NodeDatum>;
}

export function forceCollide<NodeDatum extends SimulationNodeDatum>(): ForceCollide<NodeDatum>;
export function forceCollide<NodeDatum extends SimulationNodeDatum>(radius: number): ForceCollide<NodeDatum>;
export function forceCollide<NodeDatum extends SimulationNodeDatum>(radius: (node: NodeDatum, i: number, nodes: Array<NodeDatum>) => number): ForceCollide<NodeDatum>;

// Link ----------------------------------------------------------------

export interface SimulationLinkDatum<NodeDatum extends SimulationNodeDatum> {
    // TODO: Strictly speaking, the string or number typing of source and target is only used when (re)initializing links
    // Once initialized, links' source and target fields will be of type NodeDatum
    source: NodeDatum | string | number;
    target: NodeDatum | string | number;
    // NB: index is assigned internally by force, once initialized it is defined
    index?: number;
}


export interface ForceLink<NodeDatum extends SimulationNodeDatum, LinksDatum extends SimulationLinkDatum<NodeDatum>> extends Force<NodeDatum> {
    links(): Array<LinksDatum>;
    links(links: Array<LinksDatum>): ForceLink<NodeDatum, LinksDatum>;
    id(): (d: LinksDatum, i: number, linksData: Array<LinksDatum>) => string | number;
    id(id: (d: LinksDatum, i?: number, linksData?: Array<LinksDatum>) => string): ForceLink<NodeDatum, LinksDatum>;
    distance(): (d: LinksDatum, i: number, linksData: Array<LinksDatum>) => number;
    distance(distance: (d: LinksDatum, i: number, linksData: Array<LinksDatum>) => number): ForceLink<NodeDatum, LinksDatum>;
    strength(): (d: LinksDatum, i: number, linksData: Array<LinksDatum>) => number;
    strength(strength: (d: LinksDatum, i: number, linksData: Array<LinksDatum>) => number): ForceLink<NodeDatum, LinksDatum>;
    iterations(): number;
    iterations(iterations: number): ForceLink<NodeDatum, LinksDatum>;
}

export function forceLink<NodeDatum extends SimulationNodeDatum, LinksDatum extends SimulationLinkDatum<NodeDatum>>(): ForceLink<NodeDatum, LinksDatum>;
export function forceLink<NodeDatum extends SimulationNodeDatum, LinksDatum extends SimulationLinkDatum<NodeDatum>>(linksData: Array<LinksDatum>): ForceLink<NodeDatum, LinksDatum>;

// Many Body ----------------------------------------------------------------

export interface ForceManyBody<NodeDatum extends SimulationNodeDatum> {
    strength(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    strength(strength: number): ForceManyBody<NodeDatum>;
    strength(strength: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForceManyBody<NodeDatum>;
    theta(): number;
    theta(theta: number): ForceManyBody<NodeDatum>;
    distanceMin(): number;
    distanceMin(distance: number): ForceManyBody<NodeDatum>;
    distanceMax(): number;
    distanceMax(distance: number): ForceManyBody<NodeDatum>;
}

export function forceManyBody<NodeDatum extends SimulationNodeDatum>(): ForceManyBody<NodeDatum>;

// Positioning ----------------------------------------------------------------

export interface ForcePositionX<NodeDatum extends SimulationNodeDatum> {
    strength(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    strength(strength: number): ForcePositionX<NodeDatum>;
    strength(strength: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForcePositionX<NodeDatum>;
    x(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    x(x: number): ForcePositionX<NodeDatum>;
    x(x: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForcePositionX<NodeDatum>;
}

export function forceX<NodeDatum extends SimulationNodeDatum>():ForcePositionX<NodeDatum>;
export function forceX<NodeDatum extends SimulationNodeDatum>(x: number):ForcePositionX<NodeDatum>;
export function forceX<NodeDatum extends SimulationNodeDatum>(x: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number):ForcePositionX<NodeDatum>;

export interface ForcePositionY<NodeDatum extends SimulationNodeDatum> {
    strength(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    strength(strength: number): ForcePositionY<NodeDatum>;
    strength(strength: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForcePositionY<NodeDatum>;
    y(): (d: NodeDatum, i: number, data: Array<NodeDatum>) => number;
    y(y: number): ForcePositionY<NodeDatum>;
    y(y: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number): ForcePositionY<NodeDatum>;
}

export function forceY<NodeDatum extends SimulationNodeDatum>():ForcePositionY<NodeDatum>;
export function forceY<NodeDatum extends SimulationNodeDatum>(y: number):ForcePositionY<NodeDatum>;
export function forceY<NodeDatum extends SimulationNodeDatum>(y: (d: NodeDatum, i: number, data: Array<NodeDatum>) => number):ForcePositionY<NodeDatum>;
