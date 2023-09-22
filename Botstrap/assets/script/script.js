var banner = document.getElementById('banner')
let i = 0
setInterval(() => {
    banner.style.backgroundImage = `url(assets/img/slide/${i}.jpg)`
    i++
    i > 3 ? i=0 : i=i
}, 3000);

var title = ['Hamburguer', 'Combos']
var subtitle = ['do tamanho da sua fome', 'para toda família']
    for(let quant=0; quant<title.length; quant++){
        document.querySelector('.duas-imgs').innerHTML += `         
                <div style="background-image: url(assets/img/BaianagemBanner/${quant}.jpeg);" class="img-baianagem">
                    <div class="details">
                        <div class="detail-box">
                            <h3 class="title-baianagem">${title[quant]}</h3>
                            <h3 class="subtitle-baianagem">${subtitle[quant]}</h3>
                            <button class="vermais">Ver Mais</button>
                        </div>
                    </div>
                </div>
           `
    }