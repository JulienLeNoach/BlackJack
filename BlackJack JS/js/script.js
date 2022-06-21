      var fbCard = entierAleatoire(1, 52);
      var fpCard = entierAleatoire(1, 52);
      var ajoutcarte = entierAleatoire(1, 52);
      var scoreBank;
      var scorePlayer;
      var newCard;
      var countAsP = 0;
      var countAsB = 0;

      scoreBank = modulo(fbCard);
      scorePlayer = modulo(fpCard);

      function entierAleatoire(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
        
      }


      function afficherCarte() {

        document.getElementById("bankBoard").innerHTML =
          "<img src= ../BlackJack/images/" + fbCard + ".jpg>";

        document.getElementById("playerBoard").innerHTML =
          "<img src=../BlackJack/images/" + fpCard + ".jpg> ";

        document.getElementById("scoreplayer").innerHTML =
          "Votre score est de " + scorePlayer + " points. Carte ou reste ?";

        document.getElementById("scorebank").innerHTML =
          "Le score de la banque est de " + scoreBank + " points.";
      }


      function ajouterCarte() {


        var ajoutcarte = entierAleatoire(1, 52);
        scorePlayer += modulo(ajoutcarte);
        if(modulo(ajoutcarte)==1){
          ajoutcarte=11;
          countAsP++;
        }
   
        document.getElementById("playerBoard").innerHTML +=
          "<img src=../BlackJack/images/" + ajoutcarte + ".jpg> ";
        document.getElementById("scoreplayer").innerHTML =
          "Votre score est de " + scorePlayer + " points. Carte ou reste ?";
          console.log(scorePlayer,"scoreplayer");



        if (scorePlayer > 21) {

          document.getElementById("result").innerHTML = "Vous avez  perdu !";
          document.getElementById("carte").disabled = true;
          document.getElementById("rest").disabled = true;
         
        } else if (scorePlayer == 21) {
          document.getElmentById("result").innerHTML = "Vous avez  gagné ! !";
          document.getElementById("carte").disabled = true;
          document.getElementById("rest").disabled = true;
        }

        return false;
      }


      function reste() {

        while (scoreBank <= scorePlayer) {
          var reste = entierAleatoire(1, 52);
          scoreBank += modulo(reste);

          if(modulo(reste)==1){
            reste=11;
            countAsB++;
          }

          if(scorePlayer>21){
          scorePlayer-=10*countAsB;
          }

          document.getElementById("bankBoard").innerHTML +=
            "<img src=../BlackJack/images/" + modulo(reste) + ".jpg>  ";
          document.getElementById("scorebank").innerHTML =
            "Le score de la banque " + scoreBank + " points.";

          if (scoreBank >= 21) {
            document.getElementById("result").innerHTML = "Vous avez  gagné !";
            document.getElementById("carte").disabled = true;
            document.getElementById("rest").disabled = true;
          } 
          else if (scoreBank < scorePlayer && scoreBank <= 21) {
            document.getElementById("result").innerHTML = "Vous avez perdu  !";
            document.getElementById("carte").disabled = true;
            document.getElementById("rest").disabled = true;
          } 
          else {
            document.getElementById("carte").disabled = true;
            document.getElementById("rest").disabled = true;
            document.getElementById("result").innerHTML =
              "Vous avez  perdu !!";
          }
        }

        return false;
      }

      function modulo(mod) {
        var x;
        if (mod > 13) {

          x = mod % 13;

          if (x > 10 || x == 0) {

            x = 10;
          }

        } else {

          x = mod;

          if (x > 10 || x == 0) {

            x = 10;
          }
        }

        if(x%13==1){

          x=11;
          countAsP++;
          
        }

        return x;
        
      }