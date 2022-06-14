data = [
  {
    Designation: 'Manager',
    Id: '4824068925161472',
    ReportingPerson: '5999623418675200',
    Name: 'Rupsha Sarkar',
  },
  {
    Designation: 'WOrker',
    ImageUrl:
      'https://lh3.google.com/u/0/ogw/ADea4I6GHptwJ8ojwsCiSz9IFf6RgVbMDZOE1A1IHM94\u003ds32-c-mo',
    Id: '4875071594692608',
    ReportingPerson: '5917581020495872',
    Name: 'Sayan Pal',
  },
  {
    Designation: 'WOrker',
    ImageUrl:
      'https://lh3.google.com/u/0/ogw/ADea4I7pbfLDm90YoKv6se6S5RsUEqOYgjp3TYHp69D2\u003ds32-c-mo',
    Id: '5354631067074560',
    ReportingPerson: '5917581020495872',
    Name: 'Kisan Ketchup',
  },
  {
    Designation: 'WOrker',
    Id: '5439461234573312',
    ReportingPerson: '6039998124523520',
    Name: 'Risav Sinha',
  },
  {
    Designation: 'Team Lead',
    Id: '5917581020495872',
    ReportingPerson: '5999623418675200',
    Name: 'Debanjali Dey',
  },
  { Designation: 'CEO', Id: '5999623418675200', Name: 'Jude Mohanty' },
  {
    Designation: 'WOrker',
    ImageUrl:
      'https://lh3.googleusercontent.com/a-/AOh14Gh3Zpu9-6CtlIgjXpeuEVBVy5lDAeOKE55K_87U\u003ds102-p-k-rw-no',
    Id: '6000971501535232',
    ReportingPerson: '6039998124523520',
    Name: 'Rohit Sarkar',
  },
  {
    Designation: 'Team Lead',
    Id: '6039998124523520',
    ReportingPerson: '4824068925161472',
    Name: 'Sohela Sinha',
  },
];
// var dataRespon;
// $("#6316951222091776").click(function(e)
// {
// e.preventDefault()
//  $.ajax({
// 		               type: "post",
// 		               data: "&filename=5947905234436096&bucketname=giffy-for-trial.appspot.com&projectid=giffy-for-trial",
// 		               url: "Web.action?getFile=",
// 		               async: false,
//                            cache:false,
// 		               success: function (dataResp) {
//                                                          dataRespon = dataResp;
//                                                          Modal();
//                                                             }
//         });
// });
Modal();
function Modal() {
  ej.base.enableRipple(true);
  var ModalDivElement = document.createElement('div');
  ModalDivElement.setAttribute('id', 'modalDialog');
  document.body.append(ModalDivElement);

  var button = document.getElementById('#6316951222091776');
  orgChart();
  var dialogObj = new ej.popups.Dialog({
    width: '800px',
    height: '1000px',
    header: 'Organization Chart',
    content: diagram,
    target: document.getElementById('ModalDivElement'),
    isModal: true,
    animationSettings: { effect: 'None' },
    buttons: [
      {
        click: dlgButtonClick,
        buttonModel: { content: 'OK', isPrimary: true },
      },
    ],
  });
  dialogObj.appendTo('#modalDialog');
  document.getElementById('6316951222091776').focus();

  // Button has been created to open the modal Dialog
  var button = new ej.buttons.Button({});
  button.appendTo('#6316951222091776');
  //document.getElementById('dialogBtn').onclick = function () {
  document.getElementById('6316951222091776').onclick = function () {
    dialogObj.show();
  };
  function dlgButtonClick() {
    dialogObj.hide();
  }
  function dialogClose() {
    document.getElementById('6316951222091776').style.display = 'block';
  }

  // Org chart starts from here.
  // ****************************************************//
  function orgChart() {
    //console.log(dataRespon);
    var newDivElement = document.createElement('div');
    newDivElement.setAttribute('id', 'diagram');
    var element = document.getElementById('modalDialog');
    element.append(newDivElement);
    var overviewElement = document.createElement('div');
    overviewElement.setAttribute('id', 'overview');
    element.append(newDivElement);

    ej.base.enableRipple(window.ripple);

    ej.diagrams.Diagram.Inject(
      ej.diagrams.DataBinding,
      ej.diagrams.HierarchicalTree
    );

    //Funtion to add the Template of the Node.
    function setNodeTemplate(obj, diagram) {
      var content = new ej.diagrams.StackPanel();
      content.id = obj.id + '_outerstack';
      content.orientation = 'Horizontal';
      content.style.strokeColor = 'gray';
      content.padding = { left: 5, right: 10, top: 5, bottom: 5 };

      var image = new ej.diagrams.ImageElement();
      image.width = 50;
      image.height = 50;
      image.style.strokeColor = 'none';
      image.source = obj.data.ImageUrl;
      image.id = obj.id + '_pic';

      var innerStack = new ej.diagrams.StackPanel();
      innerStack.style.strokeColor = 'none';
      innerStack.margin = { left: 5, right: 0, top: 0, bottom: 0 };
      innerStack.id = obj.id + '_innerstack';

      var text = new ej.diagrams.TextElement();
      text.content = obj.data.Name;
      text.style.color = 'black';
      text.style.bold = true;
      text.style.strokeColor = 'none';
      text.horizontalAlignment = 'Left';
      text.style.fill = 'none';
      text.id = obj.id + '_text1';

      var desigText = new ej.diagrams.TextElement();
      desigText.margin = { left: 0, right: 0, top: 5, bottom: 0 };
      desigText.content = obj.data.Designation;
      desigText.style.color = 'black';
      desigText.style.strokeColor = 'none';
      desigText.style.fontSize = 12;
      desigText.style.fill = 'none';
      desigText.horizontalAlignment = 'Left';
      desigText.style.textWrapping = 'Wrap';
      desigText.id = obj.id + '_desig';
      innerStack.children = [text, desigText];
      content.children = [image, innerStack];
      return content;
    }

    var overview;
    //Initializtion of the diagram.
    var diagram = new ej.diagrams.Diagram({
      //width: '400px',
      //height: '400px',
      //Sets the constraints of the SnapSettings
      snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
      //Configrues organizational chart layout
      layout: {
        type: 'OrganizationalChart',
        margin: { top: 20 },
        getLayoutInfo: function (node, tree) {
          if (!tree.hasSubTree) {
            tree.orientation = 'Vertical';
            tree.type = 'Right';
          }
        },
      },
      //Sets the parent and child relationship of DataSource.
      dataSourceSettings: {
        id: 'Id',
        parentId: 'ReportingPerson',
        dataSource: new ej.data.DataManager(data),
      },
      //Sets the default values of Nodes.
      getNodeDefaults: function (obj, diagram) {
        obj.height = 50;
        obj.style = { fill: 'transparent', strokeWidth: 2 };
        return obj;
      },
      //Sets the default values of connectors.
      getConnectorDefaults: function (connector, diagram) {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        connector.style.strokeColor = 'gray';
        return connector;
      },
      //customization of the node.
      setNodeTemplate: function (obj, diagram) {
        return setNodeTemplate(obj, diagram);
      },
    });
    diagram.appendTo('#diagram');
    //Initializtion of the Overview.

    overview = new ej.diagrams.Overview({
      //width: '800px',
      //height: '1000px',
      sourceID: 'diagram',
    });
    overview.appendTo('#overview');
  }
}
