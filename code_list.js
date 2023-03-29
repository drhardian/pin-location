$(document).ready(function() {
    var table = $('#myTable').DataTable();
    
    // Customize the search behavior to highlight search results
    table.on('search.dt', function() {
      var searchTerm = table.search();
      
      if (searchTerm.length > 0) {
        var regex = new RegExp(searchTerm, 'gi');
        
        // Iterate over each row in the table
        table.rows().eq(0).each(function(index) {
          var row = table.row(index);
          var rowData = row.data();
          var rowNode = row.node();
          
          // Iterate over each cell in the row
          $(rowData).each(function(cellIndex, cellData) {
            var cellNode = table.cell(rowNode, cellIndex).node();
            var cellHtml = $(cellNode).html();
            var highlightedHtml = cellHtml.replace(regex, '<span class="highlight">$&</span>');
            
            // Update the cell HTML with the highlighted version
            $(cellNode).html(highlightedHtml);
          });
        });
      } else {
        // If no search term is present, remove any previous highlights
        $('span.highlight').each(function() {
          $(this).replaceWith($(this).html());
        });
      }
    });
  });
  