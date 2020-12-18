import ReactDOM from "react-dom";

function lien() {
    var mapp = document.querySelector("#map")
    if(mapp != null)
    {
    var paths = mapp.querySelectorAll('.map__image a')
    
    if (NodeList.prototype.forEach === undefined)
    {
      NodeList.prototype.forEach = function (callback)
      {
        [].forEach.call(this, callback)
      }
    }
    paths.forEach(function (path) {
      path.addEventListener('mouseenter', function (e) {
        }
    )
      })
    }
  };
  export default lien;