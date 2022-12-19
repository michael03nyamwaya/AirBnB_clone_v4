$(function () {
  list = [];
  $('input').change(function () {
    amenity_name = $(this).attr('data-name');
    if (this.checked) {
      list.push(amenity_name)
    } else {
      list = list.filter(e => e !== amenity_name);
    }

    let checked_amenities = "";
    let delimeter = "";
    for (i = 0; i < list.length; i++){
        checked_amenities += delimeter;
        checked_amenities += list[i];
        delimeter = ", ";
    }
    $('div.amenities h4').text(checked_amenities);
  });

})
