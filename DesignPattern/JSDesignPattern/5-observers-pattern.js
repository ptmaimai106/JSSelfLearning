//=========================== OBSERVER PATTERN=====================================================

//=====================================================================================================
//=====================================================================================================

function ObserverList(){
    this.observerList = []; // private variable
}

ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj)
}

ObserverList.prototype.count = function(){
    return this.observerList.length;
}

ObserverList.prototype.get = function(index){
    if(-1 < index && index < this.observerList.length)
    return this.observerList[index];
}

ObserverList.prototype.indexOf = function(obj, startAt){
    let index = startAt;
    while(index < this.observerList.length){
        if(this.observerList[index] === obj)
            return index;
        index ++;
    }
    return -1;
}

ObserverList.prototype.removeAt = function(index){
    return this.observerList.splice(index, 1);
}

function Subject(){
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function(observer){
    return this.observers.add(observer);
}

Subject.prototype.removeObserver = function(index){
    return this.observers.removeAt(index, 0);
}

Subject.prototype.notify = function( context ){
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.get(i).update( context );
    }
};


function Observer(){
    this.update = function(){
      // ...
    };
  }