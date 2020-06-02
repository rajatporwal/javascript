// base class
var Job = function() {
    this.pays = true;
  }
  
  // prototype method
  Job.prototype.print = function() {
    console.log(this.pays ? "please hire me" : "no thank you");
  }
  
  // sub class
  var TechJob = function(title, pays) {
  
    // inherit job class (var and methods) but not the proto method
    Job.call(this);
  
    this.title = title;
    this.pays = pays;
  }
  
  // inherit proto method
  TechJob.prototype = Object.create(Job.prototype);
  
  // set the techJob conctructor ( deleted when we extend any class :. we need to set it again)
  TechJob.prototype.constructor = TechJob;
  
  // override prototype method
  TechJob.prototype.print = function() {
    console.log(this.pays ? "please hire me tech job" : "no thank you tech job");
  }
  
  // only runs when it will not find method in own proto or the parent proto.
  Object.prototype.print = function() {
    console.log(this.pays ? "I am master object" : "no thank you master object");
  }
  
  var softwarePosition = new TechJob("JS", "1000");
  
  console.log(softwarePosition.print());