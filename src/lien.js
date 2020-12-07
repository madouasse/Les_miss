import ReactDOM from "react-dom";

function lien() {
    var mapp = document.querySelector("#map")
    console.log('Hola Before !', mapp)
    if(mapp != null)
    {
    var paths = mapp.querySelectorAll('.map__image a')
    console.log('Hola Before !', paths)
    
    if (NodeList.prototype.forEach === undefined)
    {
      NodeList.prototype.forEach = function (callback)
      {
        [].forEach.call(this, callback)
      }
    }
    paths.forEach(function (path) {
      path.addEventListener('mouseenter', function (e) {
        console.log('Hola !')
        }
    )
      })
    }
  };
  export default lien;