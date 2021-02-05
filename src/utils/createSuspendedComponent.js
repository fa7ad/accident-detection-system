const { Suspense } = require('react')

export const getLoadingFallback = () => <p>Loading...</p>

export const _genSusFback = fallback => Component => {
  const SuspendedComponent = props => (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  )

  SuspendedComponent.displayName = Component?.displayName ?? 'SuspendedComponent'

  return SuspendedComponent
}

export const createSuspendedComponent = _genSusFback(getLoadingFallback())
