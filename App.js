const BTRoot = require("./action/BTRoot");
const BTUmbrella = require("./action/BTUmbrella");
const BTVigil = require("./action/BTVigil");
const BTNightRound = require("./action/BTNightRound");
const BTIsNight = require("./action/BTIsNight");
const BTIdle = require("./action/BTIdle");
const BTOutside = require("./action/BTOutside");
const BTRain = require("./action/BTRain");

class App {
  Root;
  Ticker;
  constructor() {
    this.Root = new BTRoot();

    const Umbrella = new BTUmbrella()
    

    Umbrella.AddChild(new BTOutside())
    Umbrella.AddChild(new BTRain())

    this.Root.AddChild(Umbrella)

    const Vigil = new BTVigil()
    
    const NightRound = new BTNightRound()
    NightRound.AddChild(new BTIsNight())

    Vigil.AddChild(NightRound)
    Vigil.AddChild(new BTIdle())

    this.Root.AddChild(Vigil)
  }

  Start() {
    if(null == this.Ticker)
    {
        this.Ticker = setInterval(this.Tick.bind(this),1000,this);
    }
  }

  Stop() {
    if(null == this.Ticker)
    {
      clearTimeout(this.Ticker);
      this.Ticker = null;
    }
  }

  Tick() {
    console.log("****************");
    var out = {};
    var input = { };
    var rand = Math.random();
    if(rand > 0.5)
    {
        input["rain"] = true;
    }
    rand = Math.random();
    if(rand > 0.5)
    {
        input["outside"] = true;
    }
    rand = Math.random();
    if(rand > 0.5)
    {
        input["night"] = true;
    }

    this.Root.Tick(input,out)
  }

}

module.exports = App;
