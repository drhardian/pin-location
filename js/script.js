const tasks_data = [
    {
        Task_ID: 1,
        Task_Assigned_Employee_ID: 1,
        Task_Owner_ID: 1,
        Task_Subject: "DX001",
        Task_Start_Date: "2015-01-01T00:00:00",
        Task_Due_Date: "2015-04-01T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 0,
    },
    {
        Task_ID: 2,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Node DX 01",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 1,
    },
    {
        Task_ID: 3,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Valve 1",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 2,
        title: "Lorem Ipsum 1",
        text: "<p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p><p>Mel ad euismod adipiscing moderatius eos an decore quodsi animal.</p>",
        position: "left top",
        points: [
            { top: "339", left: "195.5", popover: "#content3" },
        ],
    },
    {
        Task_ID: 4,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Valve 2",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 2,
        title: "Lorem Ipsum 2",
        text: "<p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p><p>Mel ad euismod adipiscing moderatius eos an decore quodsi animal.</p><p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p>",
        position: "right top",
        points: [
            { top: "137", left: "492", popover: "#content4" },
        ],
    },
    {
        Task_ID: 5,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Valve 3",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 2,
        title: "Lorem Ipsum 2",
        text: "<p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p><p>Mel ad euismod adipiscing moderatius eos an decore quodsi animal.</p><p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p>",
        position: "right top",
        points: [
            { top: "137", left: "592", popover: "#content5" },
        ],
    },
    {
        Task_ID: 6,
        Task_Assigned_Employee_ID: 1,
        Task_Owner_ID: 1,
        Task_Subject: "DX002",
        Task_Start_Date: "2015-01-01T00:00:00",
        Task_Due_Date: "2015-04-01T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 0,
    },
    {
        Task_ID: 7,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Node DX 044",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 6,
    },
    {
        Task_ID: 8,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Valve 1",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 7,
        title: "Lorem Ipsum 1",
        text: "<p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p><p>Mel ad euismod adipiscing moderatius eos an decore quodsi animal.</p>",
        position: "left top",
        points: [
            { top: "339", left: "105.5", popover: "#content1" },
        ],

    },
    {
        Task_ID: 9,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Valve 2",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 7,
        title: "Lorem Ipsum 2",
        text: "<p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p><p>Mel ad euismod adipiscing moderatius eos an decore quodsi animal.</p><p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p>",
        position: "right top",
        points: [
            { top: "137", left: "292", popover: "#content4" },
        ],
    },
    {
        Task_ID: 10,
        Task_Assigned_Employee_ID: 7,
        Task_Owner_ID: 1,
        Task_Subject: "Valve 3",
        Task_Start_Date: "2015-01-15T00:00:00",
        Task_Due_Date: "2015-01-31T00:00:00",
        Task_Status: "Completed",
        Task_Priority: 4,
        Task_Completion: 100,
        Task_Parent_ID: 7,
        title: "Lorem Ipsum 2",
        text: "<p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p><p>Mel ad euismod adipiscing moderatius eos an decore quodsi animal.</p><p>Lorem ipsum dolor sit amet, ne est populo dictas, et pri ferri ubique labitur.</p>",
        position: "right top",
        points: [
            { top: "137", left: "392", popover: "#content4" },
        ],
    },
];

var rowselected = [];
let selectionMode = "all";

var treeList = $("#treelist")
    .dxTreeList({
        dataSource: tasks_data,
        keyExpr: "Task_ID",
        parentIdExpr: "Task_Parent_ID",
        // autoExpandAll: true,
        columnAutoWidth: true,
        showBorders: true,
        headerFilter: {
            visible: true,
        },
        scrolling: {
            mode: "standard",
        },
        searchPanel: {
            visible: true,
        },
        paging: {
            enabled: true,
            pageSize: 10,
        },
        selection: {
            mode: "multiple",
            recursive: true,
        },
        pager: {
            showPageSizeSelector: false,
            allowedPageSizes: [5, 10, 20],
            showInfo: true,
        },
        columns: [
            {
                dataField: "Task_Subject",
                // width: 200,
            },
        ],
        onSelectionChanged(e) {
            const selectedData = treeList.getSelectedRowsData(selectionMode);

            console.log(selectedData);

            buildTableRows(selectedData);
        },
    })
    .dxTreeList("instance");

// Function to build table rows
function buildTableRows(data) {

    // Sort JSON data by id
    data.sort(function (a, b) {
        return a.Task_ID - b.Task_ID;
    });
    console.log(data);

    createPoint(data);
    // Clear existing rows
    $('#tobrak tbody tr').remove();
    // Loop through data and create table rows
    $.each(data, function (index, item) {
        var row = $('<tr>').appendTo($('#tobrak tbody'));
        $('<td>').text(item.Task_ID).appendTo(row);
        $('<td>').text(item.Task_Assigned_Employee_ID).appendTo(row);
        $('<td>').text(item.Task_Subject).appendTo(row);
        $('<td>').text(item.Task_Start_Date).appendTo(row);
        $('<td>').text(item.Task_Due_Date).appendTo(row);
        $('<td>').text(item.Task_Status).appendTo(row);
        $('<td>').text(item.Task_Priority).appendTo(row);
        $('<td>').text(item.Task_Completion).appendTo(row);
        $('<td>').text(item.Task_Parent_ID).appendTo(row);
    });
}

// Initialize ContextMenu
var contextMenu = $("#context-menu")
    .dxContextMenu({
        items: [
            {
                text: "Edit",
                onItemClick: function (e) {
                    console.log(rowselected);
                    console.log(
                        "Edit action for " +
                        rowselected.data.Task_Assigned_Employee_ID +
                        " with id " +
                        rowselected.data.Task_Subject +
                        " was performed."
                    );

                    //   var selectedRowKey = treeList.getSelectedRowKeys()[0];
                    //   if (selectedRowKey !== undefined) {
                    //     var selectedRowData = treeList.getRowByKey(selectedRowKey);
                    //     console.log('Edit action for ' + selectedRowData.name + ' with id ' + selectedRowData.id + ' was performed.');
                    //   }
                },
            },
            {
                text: "Delete",
                onItemClick: function () {
                    // Handle delete action here
                },
            },
        ],
        // target: '.dx-treelist-table',
        elementAttr: {
            id: "elementId444",
            class: "class-name",
        },
        target: "#elementId444",
    })
    .dxContextMenu("instance");

// Add context menu to TreeList
treeList.option("onContextMenuPreparing", function (e) {
    console.log(e.row);

    if (e.row && e.row.rowType === "data") {
        console.log(e.row);
        rowselected = e.row;
        e.items = contextMenu.option("items");
        e.event.preventDefault();
    }
});

// treeList.option("filterRow.visible", true);
treeList.option("filterRow.applyFilter", "auto");
treeList.option("filterRow.showOperationChooser", false);
treeList.option("onNodesInitialized", function (e) {
    var filterValue = treeList.option("filterValue");
    if (filterValue) {
        for (var i = 0; i < e.component.getVisibleNodes().length; i++) {
            var node = e.component.getVisibleNodes()[i];
            if (node.text.indexOf(filterValue) === -1) {
                node.isVisible(false);
            } else {
                node.parent && node.parent().expand();
            }
        }
    }
});
treeList.option("searchPanel.showOnlyMatches", false);
// Handle checkbox selection
// treeList.option("onSelectionChanged", function (selectedItems) {
//   var selectedKeys = selectedItems.selectedRowKeys;
//   if (selectedKeys.length > 0) {
//     console.log("Selected row keys:", selectedKeys);
//     // Add your custom action here
//   }
// });


function createPoint(data) {
    // create popover templates
    console.log(data);

    const popovers = data.map((item) => `
<div id="content${item.Task_ID}" class="content ${item.position}">
  <div class="head">
    <a href="#" class="exit"><img src="https://www.jqueryscript.net/demo/Image-Annotation-Plugin-Scalize/img/close.png" alt="" /></a>
    <h6 class="title">${item.Task_Subject}</h6>
  </div>
  <div class="body">${item.Task_Subject}</div>
</div>
`).join("");
    // create item points
    const points = data.flatMap((item) =>
       item.points ? item.points.map((point) => `
  <div class="item-point" data-top="${point.top}" data-left="${point.left}" data-popover="${point.popover}">
    <div><a href="#" class="toggle"></a></div>
  </div>
`):'' ).join("");

    // create final HTML code
    const html = `
<!-- Start Popover Template -->
${popovers}
<!-- End Popover Template -->

<!-- https://www.jqueryscript.net/demo/Image-Annotation-Plugin-Scalize/img/jacket.png -->
<img src="pid.png" alt="" class="target" id="gambar-coordinate">
<div class='wrap-selector'>
${points}
</div>
`;

    $('#imagepoint').empty();
    $('#imagepoint').html(html);
    scalizeInit();
}

function scalizeInit(){
	$('.scalize').scalize({
		styleSelector: 'circle',
		animationPopoverIn: 'flipInY',
		animationPopoverOut: 'flipOutY',
		animationSelector: 'pulse2'
	});
}