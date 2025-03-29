import { system, world } from "@minecraft/server";


export default class SoundPlayer {

    /**
     * @typedef {Object} Sounds
     * @property {string} typeId
     * @property {number} [pitch]
     * @property {number} [volume]
     * @property {number} [delay]
     */

    /** @type {Array<Sounds>} */
    #sounds = undefined

    /**
     * 
     * @param {Array<Sounds>} sounds
     */
    constructor (sounds){
        this.#sounds = sounds
    }
    
        /** 
         * @param {"overworld" | "nether" | "end"} dimension 
         * @param {import("@minecraft/server").Vector3} location
         */
        playDimension(dimension,location){
            this.#sounds.forEach((v) => {
                const { pitch, volume, delay, typeId } = v;
                system.runTimeout(()=> {
                    world.getDimension(dimension).playSound(typeId,location,{ pitch, volume })
                },delay ?? 0);
            })
        }
    
        /** 
         * @param {import("@minecraft/server").Player} player 
         */
        play(player){
    
            this.#sounds.forEach((v) => {
                const { pitch, volume, delay, typeId } = v;
                system.runTimeout(()=> {
                    player.playSound(typeId,{ location: player.location, pitch, volume })
                },delay ?? 0);
            })
        }
}
