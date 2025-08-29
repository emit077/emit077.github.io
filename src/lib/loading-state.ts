type LoadingType = 'page' | 'theme'

interface LoadingState {
  isLoading: boolean
  type: LoadingType | null
  message?: string
  isDarkMode?: boolean
}

class LoadingStateManager {
  private state: LoadingState = {
    isLoading: false,
    type: null
  }
  
  private listeners: ((state: LoadingState) => void)[] = []

  subscribe(listener: (state: LoadingState) => void) {
    this.listeners.push(listener)
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener(this.state))
  }

  showLoading(type: LoadingType, message?: string, isDarkMode?: boolean) {
    this.state = {
      isLoading: true,
      type,
      message,
      isDarkMode
    }
    this.notify()
  }

  hideLoading() {
    this.state = {
      isLoading: false,
      type: null
    }
    this.notify()
  }

  getState(): LoadingState {
    return { ...this.state }
  }
}

// Create singleton instance
export const loadingStateManager = new LoadingStateManager()
