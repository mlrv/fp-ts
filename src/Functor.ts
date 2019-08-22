/**
 * @file A `Functor` is a type constructor which supports a mapping operation `map`.
 *
 * `map` can be used to turn functions `a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.map(fa, a => a) = fa`
 * 2. Composition: `F.map(fa, a => bc(ab(a))) = F.map(F.map(fa, ab), bc)`
 */
import { HKT, Kind, Kind2, Kind3, Kind4, URIS, URIS2, URIS3, URIS4 } from './HKT'

/**
 * @since 2.0.0
 */
export interface Functor<F> {
  readonly URI: F
  readonly map: <A, B>(f: (a: A) => B) => (fa: HKT<F, A>) => HKT<F, B>
}

/**
 * @since 2.0.0
 */
export interface Functor1<F extends URIS> {
  readonly URI: F
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind<F, A>) => Kind<F, B>
}

/**
 * @since 2.0.0
 */
export interface Functor2<F extends URIS2> {
  readonly URI: F
  readonly map: <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

/**
 * @since 2.0.0
 */
export interface Functor2C<F extends URIS2, E> {
  readonly URI: F
  readonly _E: E
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind2<F, E, A>) => Kind2<F, E, B>
}

/**
 * @since 2.0.0
 */
export interface Functor3<F extends URIS3> {
  readonly URI: F
  readonly map: <A, B>(f: (a: A) => B) => <R, E>(fa: Kind3<F, R, E, A>) => Kind3<F, R, E, B>
}

/**
 * @since 2.0.0
 */
export interface Functor4<F extends URIS4> {
  readonly URI: F
  readonly map: <A, B>(f: (a: A) => B) => <S, R, E>(fa: Kind4<F, S, R, E, A>) => Kind4<F, S, R, E, B>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition<F, G> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: HKT<F, HKT<G, A>>) => HKT<F, HKT<G, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorCompositionHKT1<F, G extends URIS> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: HKT<F, Kind<G, A>>) => HKT<F, Kind<G, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorCompositionHKT2<F, G extends URIS2> {
  readonly map: <A, B>(f: (a: A) => B) => <E>(fa: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorCompositionHKT2C<F, G extends URIS2, E> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: HKT<F, Kind2<G, E, A>>) => HKT<F, Kind2<G, E, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition11<F extends URIS, G extends URIS> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind<F, Kind<G, A>>) => Kind<F, Kind<G, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition12<F extends URIS, G extends URIS2> {
  readonly map: <A, B>(f: (a: A) => B) => <E>(fa: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition12C<F extends URIS, G extends URIS2, E> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind<F, Kind2<G, E, A>>) => Kind<F, Kind2<G, E, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition21<F extends URIS2, G extends URIS> {
  readonly map: <A, B>(f: (a: A) => B) => <E>(fa: Kind2<F, E, Kind<G, A>>) => Kind2<F, E, Kind<G, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition2C1<F extends URIS2, G extends URIS, E> {
  readonly map: <A, B>(f: (a: A) => B) => (fa: Kind2<F, E, Kind<G, A>>) => Kind2<F, E, Kind<G, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition22<F extends URIS2, G extends URIS2> {
  readonly map: <A, B>(f: (a: A) => B) => <FE, GE>(fa: Kind2<F, FE, Kind2<G, GE, A>>) => Kind2<F, FE, Kind2<G, GE, B>>
}

/**
 * @since 2.0.0
 */
export interface FunctorComposition22C<F extends URIS2, G extends URIS2, E> {
  readonly map: <A, B>(f: (a: A) => B) => <FE>(fa: Kind2<F, FE, Kind2<G, E, A>>) => Kind2<F, FE, Kind2<G, E, B>>
}

/**
 * @since 2.0.0
 */
export function getFunctorComposition<F extends URIS2, G extends URIS2, E>(
  F: Functor2<F>,
  G: Functor2C<G, E>
): FunctorComposition22C<F, G, E>
export function getFunctorComposition<F extends URIS2, G extends URIS2>(
  F: Functor2<F>,
  G: Functor2<G>
): FunctorComposition22<F, G>
export function getFunctorComposition<F extends URIS2, G extends URIS, E>(
  F: Functor2C<F, E>,
  G: Functor1<G>
): FunctorComposition2C1<F, G, E>
export function getFunctorComposition<F extends URIS2, G extends URIS>(
  F: Functor2<F>,
  G: Functor1<G>
): FunctorComposition21<F, G>
export function getFunctorComposition<F extends URIS, G extends URIS2, E>(
  F: Functor1<F>,
  G: Functor2C<G, E>
): FunctorComposition12C<F, G, E>
export function getFunctorComposition<F extends URIS, G extends URIS2>(
  F: Functor1<F>,
  G: Functor2<G>
): FunctorComposition12<F, G>
export function getFunctorComposition<F extends URIS, G extends URIS>(
  F: Functor1<F>,
  G: Functor1<G>
): FunctorComposition11<F, G>
export function getFunctorComposition<F, G>(F: Functor<F>, G: Functor<G>): FunctorComposition<F, G>
export function getFunctorComposition<F, G>(F: Functor<F>, G: Functor<G>): FunctorComposition<F, G> {
  return {
    map: f => F.map(G.map(f))
  }
}
