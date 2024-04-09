ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-87.487215, -6.324254, -58.837950, 14.496570]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.486000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Colombia_Deparments_1 = new ol.format.GeoJSON();
var features_Colombia_Deparments_1 = format_Colombia_Deparments_1.readFeatures(json_Colombia_Deparments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombia_Deparments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_Deparments_1.addFeatures(features_Colombia_Deparments_1);
var lyr_Colombia_Deparments_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_Deparments_1, 
                style: style_Colombia_Deparments_1,
                popuplayertitle: "Colombia_Deparments",
                interactive: false,
                title: '<img src="styles/legend/Colombia_Deparments_1.png" /> Colombia_Deparments'
            });
var format_Colombia_count_Other_2 = new ol.format.GeoJSON();
var features_Colombia_count_Other_2 = format_Colombia_count_Other_2.readFeatures(json_Colombia_count_Other_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombia_count_Other_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_count_Other_2.addFeatures(features_Colombia_count_Other_2);
var lyr_Colombia_count_Other_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_count_Other_2, 
                style: style_Colombia_count_Other_2,
                popuplayertitle: "Colombia_count_Other",
                interactive: false,
    title: 'Colombia_count_Other<br />\
    <img src="styles/legend/Colombia_count_Other_2_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Colombia_count_Other_2_1.png" /> 0 - 3<br />\
    <img src="styles/legend/Colombia_count_Other_2_2.png" /> 3 - 10<br />\
    <img src="styles/legend/Colombia_count_Other_2_3.png" /> 10 - 30<br />\
    <img src="styles/legend/Colombia_count_Other_2_4.png" /> 30 - 72<br />'
        });
var format_Colombia_count_Kidnapping_3 = new ol.format.GeoJSON();
var features_Colombia_count_Kidnapping_3 = format_Colombia_count_Kidnapping_3.readFeatures(json_Colombia_count_Kidnapping_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombia_count_Kidnapping_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_count_Kidnapping_3.addFeatures(features_Colombia_count_Kidnapping_3);
var lyr_Colombia_count_Kidnapping_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_count_Kidnapping_3, 
                style: style_Colombia_count_Kidnapping_3,
                popuplayertitle: "Colombia_count_Kidnapping",
                interactive: false,
    title: 'Colombia_count_Kidnapping<br />\
    <img src="styles/legend/Colombia_count_Kidnapping_3_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Colombia_count_Kidnapping_3_1.png" /> 0 - 2<br />\
    <img src="styles/legend/Colombia_count_Kidnapping_3_2.png" /> 2 - 6<br />\
    <img src="styles/legend/Colombia_count_Kidnapping_3_3.png" /> 6 - 16<br />\
    <img src="styles/legend/Colombia_count_Kidnapping_3_4.png" /> 16 - 43<br />'
        });
var format_Colombia_count_Drugs_4 = new ol.format.GeoJSON();
var features_Colombia_count_Drugs_4 = format_Colombia_count_Drugs_4.readFeatures(json_Colombia_count_Drugs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombia_count_Drugs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_count_Drugs_4.addFeatures(features_Colombia_count_Drugs_4);
var lyr_Colombia_count_Drugs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_count_Drugs_4, 
                style: style_Colombia_count_Drugs_4,
                popuplayertitle: "Colombia_count_Drugs",
                interactive: false,
    title: 'Colombia_count_Drugs<br />\
    <img src="styles/legend/Colombia_count_Drugs_4_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Colombia_count_Drugs_4_1.png" /> 0 - 3<br />\
    <img src="styles/legend/Colombia_count_Drugs_4_2.png" /> 3 - 10<br />\
    <img src="styles/legend/Colombia_count_Drugs_4_3.png" /> 10 - 37<br />\
    <img src="styles/legend/Colombia_count_Drugs_4_4.png" /> 37 - 53<br />'
        });
var format_Colombia_count_Killing_5 = new ol.format.GeoJSON();
var features_Colombia_count_Killing_5 = format_Colombia_count_Killing_5.readFeatures(json_Colombia_count_Killing_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombia_count_Killing_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_count_Killing_5.addFeatures(features_Colombia_count_Killing_5);
var lyr_Colombia_count_Killing_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colombia_count_Killing_5, 
                style: style_Colombia_count_Killing_5,
                popuplayertitle: "Colombia_count_Killing",
                interactive: false,
    title: 'Colombia_count_Killing<br />\
    <img src="styles/legend/Colombia_count_Killing_5_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/Colombia_count_Killing_5_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Colombia_count_Killing_5_2.png" /> 2 - 17<br />\
    <img src="styles/legend/Colombia_count_Killing_5_3.png" /> 17 - 50<br />\
    <img src="styles/legend/Colombia_count_Killing_5_4.png" /> 50 - 135<br />'
        });
var format_Colombia_data_points_6 = new ol.format.GeoJSON();
var features_Colombia_data_points_6 = format_Colombia_data_points_6.readFeatures(json_Colombia_data_points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Colombia_data_points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colombia_data_points_6.addFeatures(features_Colombia_data_points_6);cluster_Colombia_data_points_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Colombia_data_points_6
});
var lyr_Colombia_data_points_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Colombia_data_points_6, 
                style: style_Colombia_data_points_6,
                popuplayertitle: "Colombia_data_points",
                interactive: true,
                title: '<img src="styles/legend/Colombia_data_points_6.png" /> Colombia_data_points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Colombia_Deparments_1.setVisible(true);lyr_Colombia_count_Other_2.setVisible(true);lyr_Colombia_count_Kidnapping_3.setVisible(true);lyr_Colombia_count_Drugs_4.setVisible(true);lyr_Colombia_count_Killing_5.setVisible(true);lyr_Colombia_data_points_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Colombia_Deparments_1,lyr_Colombia_count_Other_2,lyr_Colombia_count_Kidnapping_3,lyr_Colombia_count_Drugs_4,lyr_Colombia_count_Killing_5,lyr_Colombia_data_points_6];
lyr_Colombia_Deparments_1.set('fieldAliases', {'fid': 'fid', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_ANO_C': 'DPTO_ANO_C', 'DPTO_ACT_A': 'DPTO_ACT_A', 'DPTO_NAREA': 'DPTO_NAREA', 'DPTO_CSMBL': 'DPTO_CSMBL', 'DPTO_VGNC': 'DPTO_VGNC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KILLING_sum': 'KILLING_sum', 'DRUGS_sum': 'DRUGS_sum', 'KIDNAPPING_sum': 'KIDNAPPING_sum', 'OTHER_sum': 'OTHER_sum', });
lyr_Colombia_count_Other_2.set('fieldAliases', {'fid': 'fid', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_ANO_C': 'DPTO_ANO_C', 'DPTO_ACT_A': 'DPTO_ACT_A', 'DPTO_NAREA': 'DPTO_NAREA', 'DPTO_CSMBL': 'DPTO_CSMBL', 'DPTO_VGNC': 'DPTO_VGNC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KILLING_sum': 'KILLING_sum', 'DRUGS_sum': 'DRUGS_sum', 'KIDNAPPING_sum': 'KIDNAPPING_sum', 'OTHER_sum': 'OTHER_sum', });
lyr_Colombia_count_Kidnapping_3.set('fieldAliases', {'fid': 'fid', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_ANO_C': 'DPTO_ANO_C', 'DPTO_ACT_A': 'DPTO_ACT_A', 'DPTO_NAREA': 'DPTO_NAREA', 'DPTO_CSMBL': 'DPTO_CSMBL', 'DPTO_VGNC': 'DPTO_VGNC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KILLING_sum': 'KILLING_sum', 'DRUGS_sum': 'DRUGS_sum', 'KIDNAPPING_sum': 'KIDNAPPING_sum', 'OTHER_sum': 'OTHER_sum', });
lyr_Colombia_count_Drugs_4.set('fieldAliases', {'fid': 'fid', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_ANO_C': 'DPTO_ANO_C', 'DPTO_ACT_A': 'DPTO_ACT_A', 'DPTO_NAREA': 'DPTO_NAREA', 'DPTO_CSMBL': 'DPTO_CSMBL', 'DPTO_VGNC': 'DPTO_VGNC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KILLING_sum': 'KILLING_sum', 'DRUGS_sum': 'DRUGS_sum', 'KIDNAPPING_sum': 'KIDNAPPING_sum', 'OTHER_sum': 'OTHER_sum', });
lyr_Colombia_count_Killing_5.set('fieldAliases', {'fid': 'fid', 'DPTO_CCDGO': 'DPTO_CCDGO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'DPTO_ANO_C': 'DPTO_ANO_C', 'DPTO_ACT_A': 'DPTO_ACT_A', 'DPTO_NAREA': 'DPTO_NAREA', 'DPTO_CSMBL': 'DPTO_CSMBL', 'DPTO_VGNC': 'DPTO_VGNC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KILLING_sum': 'KILLING_sum', 'DRUGS_sum': 'DRUGS_sum', 'KIDNAPPING_sum': 'KIDNAPPING_sum', 'OTHER_sum': 'OTHER_sum', });
lyr_Colombia_data_points_6.set('fieldAliases', {'fid': 'fid', 'word': 'word', 'country_predicted': 'country_predicted', 'file_name': 'file_name', 'admin1': 'admin1', 'lat': 'lat', 'lon': 'lon', 'country_code3': 'country_code3', 'geonameid': 'geonameid', 'place_name': 'place_name', 'feature_class': 'feature_class', 'feature_code': 'feature_code', 'admin_level': 'admin_level', 'tagscsv2_DATES': 'tagscsv2_DATES', 'tagscsv2_TAGS': 'tagscsv2_TAGS', 'Counting_words2_massacre': 'Counting_words2_massacre', 'Counting_words2_narcotics': 'Counting_words2_narcotics', 'Counting_words2_killed': 'Counting_words2_killed', 'Counting_words2_coca': 'Counting_words2_coca', 'Counting_words2_violations': 'Counting_words2_violations', 'Counting_words2_attacks': 'Counting_words2_attacks', 'Counting_words2_kidnapping': 'Counting_words2_kidnapping', 'Counting_words2_violence': 'Counting_words2_violence', 'Counting_words2_victims': 'Counting_words2_victims', 'Counting_words2_murdered': 'Counting_words2_murdered', 'Counting_words2_killing': 'Counting_words2_killing', 'Counting_words2_crimes': 'Counting_words2_crimes', 'Counting_words2_trafficking': 'Counting_words2_trafficking', 'Counting_words2_war': 'Counting_words2_war', 'Counting_words2_criminal': 'Counting_words2_criminal', 'Counting_words2_dead': 'Counting_words2_dead', 'Counting_words2_hostages': 'Counting_words2_hostages', 'Counting_words2_conflict': 'Counting_words2_conflict', 'Counting_words2_cocaine': 'Counting_words2_cocaine', 'Counting_words2_death': 'Counting_words2_death', 'Counting_words2_corruption': 'Counting_words2_corruption', 'Counting_words2_illegal': 'Counting_words2_illegal', 'Counting_words2_murders': 'Counting_words2_murders', 'Counting_words2_homicide': 'Counting_words2_homicide', 'Counting_words2_kidnapped': 'Counting_words2_kidnapped', 'Counting_words2_fighting': 'Counting_words2_fighting', 'Counting_words2_bomb': 'Counting_words2_bomb', 'Counting_words2_kidnapings': 'Counting_words2_kidnapings', 'Counting_words2_attackers': 'Counting_words2_attackers', 'Counting_words2_attacked': 'Counting_words2_attacked', 'Counting_words2_smugglers': 'Counting_words2_smugglers', 'Counting_words2_deaths': 'Counting_words2_deaths', 'Counting_words2_assassinated': 'Counting_words2_assassinated', 'Counting_words2_bombing': 'Counting_words2_bombing', 'Counting_words2_violation': 'Counting_words2_violation', 'Counting_words2_smuggling': 'Counting_words2_smuggling', 'Counting_words2_kidnap': 'Counting_words2_kidnap', 'Counting_words2_crime': 'Counting_words2_crime', 'Counting_words2_violent': 'Counting_words2_violent', 'Counting_words2_narcotrafficking': 'Counting_words2_narcotrafficking', 'Counting_words2_kidnappers': 'Counting_words2_kidnappers', 'Counting_words2_violated': 'Counting_words2_violated', 'Counting_words2_kidnapees': 'Counting_words2_kidnapees', 'Counting_words2_criminals': 'Counting_words2_criminals', 'Counting_words2_terrorism': 'Counting_words2_terrorism', 'Counting_words2_subversive': 'Counting_words2_subversive', 'Counting_words2_stolen': 'Counting_words2_stolen', 'Points_Words_KILLING': 'Points_Words_KILLING', 'Points_Words_DRUGS': 'Points_Words_DRUGS', 'Points_Words_KIDNAPPING': 'Points_Words_KIDNAPPING', 'Points_Words_OTHER': 'Points_Words_OTHER', });
lyr_Colombia_Deparments_1.set('fieldImages', {'fid': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_ANO_C': 'Range', 'DPTO_ACT_A': 'TextEdit', 'DPTO_NAREA': 'TextEdit', 'DPTO_CSMBL': 'TextEdit', 'DPTO_VGNC': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KILLING_sum': 'TextEdit', 'DRUGS_sum': 'TextEdit', 'KIDNAPPING_sum': 'TextEdit', 'OTHER_sum': 'TextEdit', });
lyr_Colombia_count_Other_2.set('fieldImages', {'fid': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_ANO_C': 'Range', 'DPTO_ACT_A': 'TextEdit', 'DPTO_NAREA': 'TextEdit', 'DPTO_CSMBL': 'TextEdit', 'DPTO_VGNC': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KILLING_sum': 'TextEdit', 'DRUGS_sum': 'TextEdit', 'KIDNAPPING_sum': 'TextEdit', 'OTHER_sum': 'TextEdit', });
lyr_Colombia_count_Kidnapping_3.set('fieldImages', {'fid': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_ANO_C': 'Range', 'DPTO_ACT_A': 'TextEdit', 'DPTO_NAREA': 'TextEdit', 'DPTO_CSMBL': 'TextEdit', 'DPTO_VGNC': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KILLING_sum': 'TextEdit', 'DRUGS_sum': 'TextEdit', 'KIDNAPPING_sum': 'TextEdit', 'OTHER_sum': 'TextEdit', });
lyr_Colombia_count_Drugs_4.set('fieldImages', {'fid': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_ANO_C': 'Range', 'DPTO_ACT_A': 'TextEdit', 'DPTO_NAREA': 'TextEdit', 'DPTO_CSMBL': 'TextEdit', 'DPTO_VGNC': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KILLING_sum': 'TextEdit', 'DRUGS_sum': 'TextEdit', 'KIDNAPPING_sum': 'TextEdit', 'OTHER_sum': 'TextEdit', });
lyr_Colombia_count_Killing_5.set('fieldImages', {'fid': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'DPTO_ANO_C': 'Range', 'DPTO_ACT_A': 'TextEdit', 'DPTO_NAREA': 'TextEdit', 'DPTO_CSMBL': 'TextEdit', 'DPTO_VGNC': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KILLING_sum': 'TextEdit', 'DRUGS_sum': 'TextEdit', 'KIDNAPPING_sum': 'TextEdit', 'OTHER_sum': 'TextEdit', });
lyr_Colombia_data_points_6.set('fieldImages', {'fid': 'TextEdit', 'word': 'TextEdit', 'country_predicted': 'TextEdit', 'file_name': 'TextEdit', 'admin1': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'country_code3': 'TextEdit', 'geonameid': 'TextEdit', 'place_name': 'TextEdit', 'feature_class': 'TextEdit', 'feature_code': 'TextEdit', 'admin_level': 'Range', 'tagscsv2_DATES': 'TextEdit', 'tagscsv2_TAGS': 'TextEdit', 'Counting_words2_massacre': 'Range', 'Counting_words2_narcotics': 'Range', 'Counting_words2_killed': 'TextEdit', 'Counting_words2_coca': 'Range', 'Counting_words2_violations': 'Range', 'Counting_words2_attacks': 'Range', 'Counting_words2_kidnapping': 'Range', 'Counting_words2_violence': 'Range', 'Counting_words2_victims': 'Range', 'Counting_words2_murdered': 'Range', 'Counting_words2_killing': 'Range', 'Counting_words2_crimes': 'Range', 'Counting_words2_trafficking': 'Range', 'Counting_words2_war': 'Range', 'Counting_words2_criminal': 'Range', 'Counting_words2_dead': 'Range', 'Counting_words2_hostages': 'Range', 'Counting_words2_conflict': 'Range', 'Counting_words2_cocaine': 'Range', 'Counting_words2_death': 'Range', 'Counting_words2_corruption': 'Range', 'Counting_words2_illegal': 'Range', 'Counting_words2_murders': 'Range', 'Counting_words2_homicide': 'Range', 'Counting_words2_kidnapped': 'Range', 'Counting_words2_fighting': 'Range', 'Counting_words2_bomb': 'Range', 'Counting_words2_kidnapings': 'Range', 'Counting_words2_attackers': 'Range', 'Counting_words2_attacked': 'Range', 'Counting_words2_smugglers': 'Range', 'Counting_words2_deaths': 'Range', 'Counting_words2_assassinated': 'Range', 'Counting_words2_bombing': 'Range', 'Counting_words2_violation': 'Range', 'Counting_words2_smuggling': 'Range', 'Counting_words2_kidnap': 'Range', 'Counting_words2_crime': 'Range', 'Counting_words2_violent': 'CheckBox', 'Counting_words2_narcotrafficking': 'CheckBox', 'Counting_words2_kidnappers': 'CheckBox', 'Counting_words2_violated': 'Range', 'Counting_words2_kidnapees': 'Range', 'Counting_words2_criminals': 'CheckBox', 'Counting_words2_terrorism': 'Range', 'Counting_words2_subversive': 'Range', 'Counting_words2_stolen': 'Range', 'Points_Words_KILLING': 'Range', 'Points_Words_DRUGS': 'Range', 'Points_Words_KIDNAPPING': 'Range', 'Points_Words_OTHER': 'Range', });
lyr_Colombia_Deparments_1.set('fieldLabels', {'fid': 'hidden field', 'DPTO_CCDGO': 'hidden field', 'DPTO_CNMBR': 'inline label - always visible', 'DPTO_ANO_C': 'hidden field', 'DPTO_ACT_A': 'hidden field', 'DPTO_NAREA': 'hidden field', 'DPTO_CSMBL': 'hidden field', 'DPTO_VGNC': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'KILLING_sum': 'inline label - always visible', 'DRUGS_sum': 'inline label - always visible', 'KIDNAPPING_sum': 'inline label - always visible', 'OTHER_sum': 'inline label - always visible', });
lyr_Colombia_count_Other_2.set('fieldLabels', {'fid': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', 'DPTO_ANO_C': 'no label', 'DPTO_ACT_A': 'no label', 'DPTO_NAREA': 'no label', 'DPTO_CSMBL': 'no label', 'DPTO_VGNC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KILLING_sum': 'no label', 'DRUGS_sum': 'no label', 'KIDNAPPING_sum': 'no label', 'OTHER_sum': 'no label', });
lyr_Colombia_count_Kidnapping_3.set('fieldLabels', {'fid': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', 'DPTO_ANO_C': 'no label', 'DPTO_ACT_A': 'no label', 'DPTO_NAREA': 'no label', 'DPTO_CSMBL': 'no label', 'DPTO_VGNC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KILLING_sum': 'no label', 'DRUGS_sum': 'no label', 'KIDNAPPING_sum': 'no label', 'OTHER_sum': 'no label', });
lyr_Colombia_count_Drugs_4.set('fieldLabels', {'fid': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', 'DPTO_ANO_C': 'no label', 'DPTO_ACT_A': 'no label', 'DPTO_NAREA': 'no label', 'DPTO_CSMBL': 'no label', 'DPTO_VGNC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KILLING_sum': 'no label', 'DRUGS_sum': 'no label', 'KIDNAPPING_sum': 'no label', 'OTHER_sum': 'no label', });
lyr_Colombia_count_Killing_5.set('fieldLabels', {'fid': 'no label', 'DPTO_CCDGO': 'no label', 'DPTO_CNMBR': 'no label', 'DPTO_ANO_C': 'no label', 'DPTO_ACT_A': 'no label', 'DPTO_NAREA': 'no label', 'DPTO_CSMBL': 'no label', 'DPTO_VGNC': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KILLING_sum': 'no label', 'DRUGS_sum': 'no label', 'KIDNAPPING_sum': 'no label', 'OTHER_sum': 'no label', });
lyr_Colombia_data_points_6.set('fieldLabels', {'fid': 'hidden field', 'word': 'inline label - always visible', 'country_predicted': 'hidden field', 'file_name': 'inline label - always visible', 'admin1': 'inline label - always visible', 'lat': 'hidden field', 'lon': 'hidden field', 'country_code3': 'inline label - always visible', 'geonameid': 'hidden field', 'place_name': 'inline label - always visible', 'feature_class': 'hidden field', 'feature_code': 'hidden field', 'admin_level': 'inline label - always visible', 'tagscsv2_DATES': 'inline label - always visible', 'tagscsv2_TAGS': 'inline label - always visible', 'Counting_words2_massacre': 'hidden field', 'Counting_words2_narcotics': 'hidden field', 'Counting_words2_killed': 'hidden field', 'Counting_words2_coca': 'hidden field', 'Counting_words2_violations': 'hidden field', 'Counting_words2_attacks': 'hidden field', 'Counting_words2_kidnapping': 'hidden field', 'Counting_words2_violence': 'hidden field', 'Counting_words2_victims': 'hidden field', 'Counting_words2_murdered': 'hidden field', 'Counting_words2_killing': 'hidden field', 'Counting_words2_crimes': 'hidden field', 'Counting_words2_trafficking': 'hidden field', 'Counting_words2_war': 'hidden field', 'Counting_words2_criminal': 'hidden field', 'Counting_words2_dead': 'hidden field', 'Counting_words2_hostages': 'hidden field', 'Counting_words2_conflict': 'hidden field', 'Counting_words2_cocaine': 'hidden field', 'Counting_words2_death': 'hidden field', 'Counting_words2_corruption': 'hidden field', 'Counting_words2_illegal': 'hidden field', 'Counting_words2_murders': 'hidden field', 'Counting_words2_homicide': 'hidden field', 'Counting_words2_kidnapped': 'hidden field', 'Counting_words2_fighting': 'hidden field', 'Counting_words2_bomb': 'hidden field', 'Counting_words2_kidnapings': 'hidden field', 'Counting_words2_attackers': 'hidden field', 'Counting_words2_attacked': 'hidden field', 'Counting_words2_smugglers': 'hidden field', 'Counting_words2_deaths': 'hidden field', 'Counting_words2_assassinated': 'hidden field', 'Counting_words2_bombing': 'hidden field', 'Counting_words2_violation': 'hidden field', 'Counting_words2_smuggling': 'hidden field', 'Counting_words2_kidnap': 'hidden field', 'Counting_words2_crime': 'hidden field', 'Counting_words2_violent': 'hidden field', 'Counting_words2_narcotrafficking': 'hidden field', 'Counting_words2_kidnappers': 'hidden field', 'Counting_words2_violated': 'hidden field', 'Counting_words2_kidnapees': 'hidden field', 'Counting_words2_criminals': 'hidden field', 'Counting_words2_terrorism': 'hidden field', 'Counting_words2_subversive': 'hidden field', 'Counting_words2_stolen': 'hidden field', 'Points_Words_KILLING': 'hidden field', 'Points_Words_DRUGS': 'inline label - always visible', 'Points_Words_KIDNAPPING': 'hidden field', 'Points_Words_OTHER': 'hidden field', });
lyr_Colombia_data_points_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});