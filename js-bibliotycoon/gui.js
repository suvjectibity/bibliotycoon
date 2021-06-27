var customerPanel, storeAlertsPanel;

function guiInit() {
  customerPanel = document.getElementById("customer-panel");
  storeAlertsPanel = document.getElementById("store-alerts-panel");
  registerDraggablePanels(customerPanel,storeAlertsPanel);
}

function pushStoreAlert(alertMsg) {
  console.log(alertMsg);
  document.getElementById("store-alerts-panel-header").innerHTML += "<br>" + alertMsg;
}

function pushCustomerAlert(alertMsg) {
  console.log(alertMsg);
  document.getElementById("customer-panel-header").innerHTML += "<br>" + alertMsg;
}

function registerDraggablePanels(...panels) {
  console.log(panels);
  for(var i = 0;i < panels.length;i++)
    panels[i].style.zIndex = i+1;

  function reshuffleZIndexFrom(index) {
    for(var i = index;i < panels.length;i++)
      panels[i].style.zIndex--;
  }

  panels.forEach((panel,index) => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById(panel.id + "-header").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      panel.style.zIndex = panels.length;
      reshuffleZIndexFrom(index+1);
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      panel.style.top = (panel.offsetTop - pos2) + "px";
      panel.style.left = (panel.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  });
}
