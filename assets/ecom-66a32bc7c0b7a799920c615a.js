/* Publish by EComposer at 2024-07-26 04:58:23*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-w2sxhw5xurp"]=  window.__ectimmers["ecom-w2sxhw5xurp"] || {};
if(this.settings.link==="lightbox"&&this.settings.lightbox==="yes"&&window.EComModal&&this.$el){var e=this.$el.querySelector("[ecom-modal]");new window.EComModal(e,{cssClass:["ecom-container-lightbox-"+this.id]})}let i=this.$el;if(!i)return;function t(s){const o=s.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom-s.offsetHeight/2<=(window.innerHeight||document.documentElement.clientHeight)&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function n(){let s=i.querySelector(".ecom-element.ecom-base-image"),o=i.closest(".core__row--columns");s&&(t(s)?(s.classList.add("image-highlight"),o.setAttribute("style","z-index: unset")):(s.classList.remove("image-highlight"),o.setAttribute("style","z-index: 1")))}this.settings.highligh_on_viewport&&window.addEventListener("scroll",function(){n()})

                    });
                    
                        document.querySelectorAll('.ecom-w2sxhw5xurp').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-w2sxhw5xurp', settings: {"link":"none","lightbox":"no","highligh_on_viewport":false},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);};window.addEventListener("load",()=>{
                let isAdmin = false;
                if(document.querySelector("#admin-bar-iframe")){
                    isAdmin = true;
                }
                if(!isAdmin) {
                    if(window.EComposerBrand) {
                        return;
                    } else {
                        window.EComposerBrand = true;
                    }
                }
                let a=document.querySelector("body"),b=document.createElement(Math.random().toString(36).replace(/\d*/g,"").substr(2,4));b.setAttribute("style",["position:relative","top: 0px","left: 0px","display: inline-block","height: 30px","line-height: 30px","font-size: 11px","width: 100%","text-align: center","opacity: 1","text-indent: 0","color: rgba(18, 18, 18, 0.75)","background: transparent","opacity: 0.8",""].join(" !important;")),b.innerHTML="Built with <a style='color: currentColor;text-decoration: none;' href=\"https://ecomposer.io/?utm_source=client-site&utm_medium=footer&utm_campaign=footer_branding&utm_term=links&utm_content="+window.location.origin+"\" target=\"_blank\">EComposer</a>" + (isAdmin ? ". Contact us or upgrade to remove branding" :""),a.appendChild(b)
            });