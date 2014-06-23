var text = "Реликтовый ледник выслеживает параллакс, при этом плотность Вселенной в 3 * 10 в 18-й степени раз меньше"
    + ", с учетом некоторой неизвестной добавки скрытой массы. Ганимед, после осторожного анализа,"
    + " вызывает первоначальный радиант – север вверху, восток слева. Соединение гасит секстант, "
    + "однако большинство спутников движутся вокруг своих планет в ту же сторону, в какую вращаются планеты.";

var types   = ["google", "local"];
var sizes   = [13, 15, 18];
var colors  = ["black", "white", "orange"];
var weights = ["thin", "light", "regular", "medium", "bold"];


types.forEach(function (type) {
    var el = document.getElementById(type);
    el.appendChild(newEl("h1","Web Font from " + type));
    sizes.reduce(createSizeSection, el);
});

function createSizeSection (root, size) {
    var el = newEl("font-" + size);
    var ctx = { size: size }
    weights.reduce(createWeightSection.bind(null, ctx), el);
    root.appendChild(el);
    return root;
}

function createWeightSection (ctx, root, weight) {
    ctx["weight"] = weight;
    var el = newEl(weight);
    colors.reduce(createColorsSection.bind(null, ctx), el)
    root.appendChild(el);
    return root;
}

function createColorsSection (ctx, root, color) {
    var el = newEl(color, text);
    el.insertAdjacentHTML("afterbegin", "<span>" + ctx.size + " px " + ctx.weight + ". </span> ");
    root.appendChild(el);
    return root;
}

function newEl (className, text) {
    var el = document.createElement("div");
    el.className = className;
    el.textContent = text || "";
    return el;
}

function getFontSize (el) {
    return window.getComputedStyle(el).fontSize;
}