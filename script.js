let listaCarros = [
    {
        'nome': "Honda Civic",
        "img": "img/honda-civic.png",
        "descricao": "O Honda Civic 2022 apresenta um design moderno e elegante, com atualizações notáveis na carroceria e interior. Equipado com tecnologia avançada de segurança e entretenimento, o modelo oferece uma experiência de condução confortável e conectada."
    },
    {
        'nome': "Taycan Porsche 4s",
        "img": "img/taycan.png",
        "descricao": " Porsche Taycan 4s é um carro esportivo elétrico de alto desempenho, combinando luxo e inovação tecnológica. Com potência impressionante e aceleração rápida, redefine a experiência de condução elétrica."
    },
    {
        'nome': "Chevrolet Cruze",
        "img": "img/cruze.png",
        "descricao": "O Cruze da Chevrolet é um sedan compacto conhecido por seu equilíbrio entre eficiência de combustível e estilo moderno. Oferece tecnologia avançada e conforto, tornando-o uma opção popular para aqueles que buscam um carro prático e bem-equipado."
    },
    {
        'nome': "Toyota Corolla",
        "img": "img/corolla.png",
        "descricao": "O Corolla da Toyota é um sedan compacto reconhecido por sua confiabilidade lendária e eficiência. Com décadas de história, oferece conforto, segurança e valor duradouro para os motoristas em todo o mundo."
    },
    {
        'nome': "Volkswagen Jetta",
        "img": "img/jetta.png",
        "descricao": " Jetta da Volkswagen é um sedan compacto que combina estilo alemão, desempenho sólido e tecnologia moderna, tornando-o uma escolha popular entre os consumidores que procuram uma experiência de condução sofisticada e prática."
    },
    {
        'nome': "Audi A3 Sedan",
        "img": "img/audi-a3-sedan.webp",
        "descricao": "O Audi A3 é um sedan compacto premium conhecido por seu design elegante e qualidade de construção alemã, oferecendo uma experiência de condução refinada e recursos tecnológicos de destaque."
    },
]

let listaMotos = [
    {
        'nome': "Yamaha YZF-R3",
        "img": "img/yzf-r3.png",
        "descricao": "A Yamaha YZF R3 é uma motocicleta esportiva de média cilindrada, reconhecida por seu design agressivo e desempenho impressionante. Equipada com um motor de 321cc, oferece uma combinação de potência e agilidade, tornando-a uma escolha popular entre entusiastas de pilotagem esportiva."
    },
    {
        'nome': "S1000-rr",
        "img": "img/s1000-rr.png",
        "descricao": "A S1000RR é uma motocicleta esportiva icônica da BMW, conhecida por seu desempenho excepcional e tecnologia de ponta. Com um motor de alta potência e recursos como controle de tração e modos de condução ajustáveis, oferece uma experiência de pilotagem emocionante e versátil. "
    },
    {
        'nome': "Ninja-zx-6",
        "img": "img/ninja-zx-6.png",
        "descricao": "A Ninja ZX-6 é uma motocicleta esportiva da Kawasaki, renomada por sua agilidade e estilo esportivo. Equipada com um motor de média cilindrada, incorpora tecnologias avançadas, como controle de tração e modos de condução, proporcionando uma experiência de pilotagem envolvente. "
    },
    {
        'nome': "Ninja-400",
        "img": "img/ninja-400.png",
        "descricao": "A Ninja 400 é uma motocicleta esportiva fabricada pela Kawasaki, destacando-se por seu motor de 400cc e design esportivo. Ideal para pilotos iniciantes e experientes, oferece um equilíbrio entre potência e controle, além de recursos modernos como painel de instrumentos digital e design aerodinâmico. "
    },
    {
        'nome': "Gsxr-1300",
        "img": "img/gsxr-1300.png",
        "descricao": "A GSX-R1300, também conhecida como Hayabusa, é uma lendária motocicleta esportiva da Suzuki, famosa por seu desempenho excepcional e velocidade impressionante. Equipada com um motor potente e tecnologia avançada, é reconhecida por sua aerodinâmica agressiva e conforto para viagens de longa distância. "
    },
    {
        'nome': "CBR-650r",
        "img": "img/cbr-650r.png",
        "descricao": "A CBR 650R é uma motocicleta esportiva da Honda, notável pelo seu motor de 650cc e design aerodinâmico. Oferecendo uma mistura de desempenho e conforto, é adequada tanto para pilotagem esportiva quanto para viagens mais longas."
    }


]
let listaAutomoveis = listaCarros.concat(listaMotos);

function exibirAutomoveis(array) {
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML = '';

    array.forEach((automovel, posicao) => {
        cardsContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="${automovel.img}" alt="..." class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${automovel.nome}</h5>
                        <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                        <a href="#" class="btn btn-secondary" onclick="remove('${posicao}')"><i class="bi bi-trash"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
}
exibirAutomoveis(listaAutomoveis);

function filtrarItens(array, posicao) {
    let listaAutomoveis = document.getElementById('cards');
    listaAutomoveis.innerHTML = '';

    array.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.classList.add('col-md-4');
        itemDiv.innerHTML = `
        
            <div class="card m-2">
                <img src="${item.img}" alt="${item.nome}">
                <div class="card-body">
                    <h2>${item.nome}</h2>
                    <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    <a href="#" class="btn btn-secondary" onclick="remove('${posicao}')"><i class="bi bi-trash"></i></a>
                </div>
            </div>    
          
        `;
        listaAutomoveis.appendChild(itemDiv);
    });
}

document.getElementById('btnCarros').addEventListener('click', () => {
    filtrarItens(listaCarros);
});

document.getElementById('btnMotos').addEventListener('click', () => {
    filtrarItens(listaMotos);
});

document.getElementById('btnAll').addEventListener('click', () => {
    exibirAutomoveis(listaAutomoveis);
});

function zoomImg(posicao) {
    let automovelSelecionado = listaAutomoveis[posicao];
    document.getElementById("nomeCarro").innerHTML = automovelSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = automovelSelecionado.descricao;
    document.getElementById("imgModal").src = automovelSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();
}


function alterarTema() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-moon-fill"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}

function remove(posicao) {
    let cardCarro = document.getElementById("cards");

    listaAutomoveis.splice(posicao, 1);
    cardCarro.innerHTML = "";

    listaAutomoveis.forEach((carro, posicao) => {
        cardCarro.innerHTML += `
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="${carro.img}" alt="..." class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${carro.nome}</h5>
                        <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                        <a href="#" class="btn btn-secondary" onclick="remove('${posicao}')"><i class="bi bi-trash"></i></a>
                    </div>
                </div>
            </div>
        `;
    });
}