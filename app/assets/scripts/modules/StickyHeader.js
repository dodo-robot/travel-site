import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader{
    constructor() {
        this.siteHeader = document.getElementsByClassName("site-header");
        this.targetElement = document.getElementsByClassName("large-hero__title");
        this.pageSection = document.getElementsByClassName("page-section");
        this.headerLinks = document.getElementsByClassName("primary-nav");
        this.createHeaderWaypoint();
        this.createSectionWaypoint();
    }

    createHeaderWaypoint(){
        var that = this; 
        new Waypoint({
            element:  that.targetElement[0],
            handler: function(direction){
                if(direction == "down")
                    that.siteHeader[0].classList.toggle("site-header--dark"); 
                else 
                    that.siteHeader[0].classList.remove("site-header--dark");

            }
        });
    }
 
    resetLinks(){
        for (var i = 0; i < this.headerLinks.length; i++) {
            var a = this.headerLinks[i].getElementsByTagName('a');
            for (var j = 0; j < a.length; j++) {
                var elem = a[j];
                elem.classList.remove('is-current-link'); 
            }
        }    
    }

    createSectionWaypoint(){   
        var that = this;
        Array.prototype.forEach.call(this.pageSection, function(el) { 
            new Waypoint({
                element:  el,
                handler: function(direction){  
                    if(direction == "down"){
                        var matchingLink = el.getAttribute("data-matching-link");
                        that.resetLinks()
                        document.getElementById(matchingLink).classList.add('is-current-link'); 
                    } 
                },
                offset:"18%"
            }); 
        }); 

        Array.prototype.forEach.call(this.pageSection, function(el) { 
            new Waypoint({
                element:  el,
                handler: function(direction){ 
                    if(direction == "up"){
                        var matchingLink = el.getAttribute("data-matching-link");  
                        that.resetLinks()
                        document.getElementById(matchingLink).classList.add('is-current-link'); 
                    } 
                },
                offset:"-40%"
            }); 
        }); 

    }
}

export default StickyHeader;