class player{
    name = ""
    totalCoin = 0
    status = ["Powered up", "Big", "Small", "Dead"]
    hasStar = false
    setName = function(){
        return this.name = "Mario"
    }
    gotHit = function(){
        let i = 0
        i++
        while(i===1){
            return this.status = "Powered Up"
        }
        while(i===2){
            return this.status = "Big"
        }
        while(i===3){
            return this.status = "Small"
        }
        while(i===4){
            return this.status = "Dead"
            process.exit()
        }
    }
    gotPowerup = function(){
        let j = 0
        j++
        while(j===3){
            return this.status = "Powered Up"
            this.hasStar = true
        }
        while(j===2){
            return this.status = "Big"
        }
        while(j===1){
            return this.status = "Small"
        }
    }
    addCoin = function(){
        let amount = Math.floor(Math.random(10)+1)
        this.totalCoin += amount
        return this.totalCoin
    }
    print = function(){
        this.name = "Mario"
        let gamer = ["name: ", this.name,"coin: ", this.totalCoin,"status: ", this.status,"hasStar: ", this.hasStar]
        console.log(JSON.stringify(gamer))
    }
}
function randomRange(user){
    user = new player
    let random = Math.floor(Math.random(2)+0)
    let hit = user.gotHit()
    let power = user.gotPowerup()
    let coin = user.addCoin()
    let print = user.print()
    while(random === 0){
        return hit
        break
    }
    while(random === 1){
        return power
        break
    }
    while(random === 2){
        return coin
        break
    }
    print
}
setInterval(randomRange, 10)