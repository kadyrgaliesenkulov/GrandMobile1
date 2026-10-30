const analyzeBtn = document.getElementById("analyzeBtn");

analyzeBtn.addEventListener("click", function () {

    const complaint = document
        .getElementById("complaint")
        .value
        .toLowerCase()
        .trim();

    const category = document.getElementById("category");
    const priority = document.getElementById("priority");
    const recommendation = document.getElementById("recommendation");

    if (complaint.length < 5) {
        category.textContent = "Хабарлама тым қысқа";
        priority.textContent = "";
        recommendation.textContent = "Толығырақ мәтін енгізіңіз.";
        return;
    }

    let type = "Басқа өтініш";
    let level = "Қосымша тексеру қажет";
    let advice = "Әкімші хабарламаны қолмен тексеруі керек.";

    if (
        complaint.includes("қорлады") ||
        complaint.includes("балағат")
    ) {
        type = "Ойыншының мінез-құлқы";
        level = "Тексеру қажет";
        advice = "Ойын ережесін және дәлелдерді тексеріңіз.";
    }

    else if (
        complaint.includes("ұрлады") ||
        complaint.includes("алдады")
    ) {
        type = "Алаяқтық туралы шағым";
        level = "Тексеру қажет";
        advice = "Оқиға деректерін және дәлелдерді тексеріңіз.";
    }

    else if (
        complaint.includes("көмектес") ||
        complaint.includes("көмек")
    ) {
        type = "Көмек сұрау";
        level = "Қалыпты";
        advice = "Ойыншының мәселесін анықтаңыз.";
    }

    category.textContent = "Санат: " + type;
    priority.textContent = "Басымдық: " + level;
    recommendation.textContent = "Ұсыныс: " + advice;

});

