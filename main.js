const btn = document.querySelector('.btn');
        const icon = document.querySelector('.icon');
        
        let msg = document.querySelector('.msg');
        let inicio = false;
        let count = 0;
        let fim = false;
        let rAF;
        
        btn.addEventListener('click', start);
        
        function start(){
            btn.style.display="none";
            msg.textContent="Atenção..";
            rodar();
            setTimeout(endGame,random(1000,10000));
        }
        function endGame(){
            cancelAnimationFrame(rAF);
            msg.textContent="APERTE!";
            document.addEventListener('keydown',aperta);
        }
        function aperta(e){
        if(e.key === "a"){
            msg.textContent="Player1 WIN!";
            fim=true;
        }else if(e.key ==="l"){
            msg.textContent="Player2 WIN!";
            fim=true;
        }if(fim==true){
            document.removeEventListener('keydown',aperta);
            btn.style.display="block";
        }
    }
        function random(min,max){
            let rand = Math.floor(Math.random()*(max-min)-min);
            return rand;
        }
        function rodar(timestamp){
            if(!inicio){
                inicio = timestamp;
            }
            count = (timestamp-inicio)/3;
            if(count>359){
                count%=360;
            }
            icon.style.transform=`rotate(${count}deg)`;
            rAF = requestAnimationFrame(rodar);
        }

