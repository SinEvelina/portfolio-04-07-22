window.addEventListener("DOMContentLoaded", function() {
    let imgs = document.querySelectorAll('.project-item__image')

    imgs.forEach( img => img.addEventListener('click',  openModal ))

    function openModal(e){
            let modalParent = e.target.closest('.project-item')
            let modalBlock = modalParent.querySelector('._modal')
            let closeBtn = modalParent.querySelector('.close-btn')
            let overlay = modalParent.querySelector('._modal-overlay')
            let scrollWidth = calcScroll()
            let bodyWrap = document.querySelector('.main-wrapper') 

            
            let pagePos = window.scrollY;
            bodyWrap.setAttribute('data-pagePos', pagePos);
    
            modalBlock.classList.add('active-modal');
            document.body.style.paddingRight = `${scrollWidth}px`;
            overlay.style.display = 'block';  
            bodyWrap.classList.add('_active-modal');

            
   
            
            closeBtn.addEventListener('click', e => closeModal(e) );

            overlay.addEventListener('click', e => closeModal(e) );

            function closeModal(e){

                if ( modalBlock.classList.contains('active-modal') ) {

                    e.stopPropagation()
                    
                    //console.log('bodyWrap pos', bodyWrap.getAttribute('data-pagePos'))
                    let pos = parseInt( bodyWrap.getAttribute('data-pagePos') );

                    document.body.style.paddingRight = `0px`;
                    modalBlock.classList.remove('active-modal');
                    bodyWrap.classList.remove('_active-modal');
                    overlay.style.display = 'none';   

                    bodyWrap.removeAttribute('data-pagePos');
                    //console.log('pos', pos)
                    window.scroll( 0, pos );
                }
            }

            function calcScroll(){
                let div = document.createElement('div')

                div.style.width = '50px';
                div.style.height = '50px';
                div.style.overflowY = 'scroll';
                div.style.visibility = 'hidden';

                document.body.appendChild(div);
                let scrollW = div.offsetWidth - div.clientWidth;
                div.remove();

                return scrollW;
            }
    }
});
