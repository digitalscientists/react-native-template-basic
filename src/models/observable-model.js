class ObservableModel {

  listeners = []

  constructor(){
  }

  subscribe(listener){
    this.listeners.push(listener)
    let unsubscribe = () => {
      this.listeners = this.listeners.filter(l => l !== listener)
    }
    return unsubscribe
  }

  notify(){
    this.listeners.forEach(listener => listener(this));
  };

  set(params={}){
    for(var key in params){
      this[key] = params[key]
    }
    this.notify()
  }

}

export default ObservableModel;
