import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(className, offset){
        this.offsetPerecentge = offset;
        this.itemsToReveal = document.getElementsByClassName(className); 
        this.hideInitaially();
        this.createWaypoints();
    }

    hideInitaially(){ 
        Array.prototype.forEach.call(this.itemsToReveal, function(el) {
            el.classList.toggle("reveal-item"); 
        }); 
    }

    createWaypoints(){
        var currentItem = this.itemsToReveal; 
        var offset = this.offsetPerecentge;
        Array.prototype.forEach.call(currentItem, function(el) {
            new Waypoint({
                element: el,
                handler: function(){
                    el.classList.toggle("reveal-item--is-visible"); 
                },
                offset: offset
            });
        });
    
    }

}

export default RevealOnScroll;