const { Suspense } = require('react')

export const getLoadingFallback = () => <p>Loading...</p>

export const _genSusFback = fallback => Component => props => {
  ;<Suspense fallback={fallback}>
    <Component {...props} />
  </Suspense>
}

export const createSuspendedComponent = _genSusFback(getLoadingFallback())
