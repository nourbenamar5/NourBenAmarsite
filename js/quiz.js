const bonnesReponses = {
  q1: "b",
  q2: "a",
  q3: "a",
  q4: "b",
  q5: "a",
  q6: "b",
  q7: "b",
  q8: "a",
  q9: "b",
  q10:"b"
};

function corrigerQuiz(){
  const total = Object.keys(bonnesReponses).length;
  let score = 0;

  let correctionHTML = "<h4>Réponses correctes :</h4><ol>";

  for (const q in bonnesReponses){
    const choix = document.querySelector('input[name="' + q + '"]:checked');
    const bonne = bonnesReponses[q];

    if (choix && choix.value === bonne) score++;

    correctionHTML += "<li>" + q.toUpperCase() + " : " + bonne + "</li>";
  }

  correctionHTML += "</ol>";

  document.getElementById("scoreTxt").textContent =
    "Votre note : " + score + " / " + total;

  document.getElementById("correction").innerHTML = correctionHTML;
}

document.getElementById("btnValider").addEventListener("click", corrigerQuiz);
