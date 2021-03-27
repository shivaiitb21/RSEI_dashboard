var wms_layers = [];

var format_Jamkhed_VillagewiseRSEI2015_0 = new ol.format.GeoJSON();
var features_Jamkhed_VillagewiseRSEI2015_0 = format_Jamkhed_VillagewiseRSEI2015_0.readFeatures(json_Jamkhed_VillagewiseRSEI2015_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jamkhed_VillagewiseRSEI2015_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jamkhed_VillagewiseRSEI2015_0.addFeatures(features_Jamkhed_VillagewiseRSEI2015_0);
var lyr_Jamkhed_VillagewiseRSEI2015_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jamkhed_VillagewiseRSEI2015_0, 
                style: style_Jamkhed_VillagewiseRSEI2015_0,
                interactive: true,
    title: 'Jamkhed_Villagewise RSEI2015<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_0_0.png" /> 0.2 - 0.35<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_0_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_0_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_0_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/Jamkhed_VillagewiseRSEI2015_0_4.png" /> 0.43 - 0.515<br />'
        });
var format_KarjatVillagewiseRSEI2020_1 = new ol.format.GeoJSON();
var features_KarjatVillagewiseRSEI2020_1 = format_KarjatVillagewiseRSEI2020_1.readFeatures(json_KarjatVillagewiseRSEI2020_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarjatVillagewiseRSEI2020_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarjatVillagewiseRSEI2020_1.addFeatures(features_KarjatVillagewiseRSEI2020_1);
var lyr_KarjatVillagewiseRSEI2020_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KarjatVillagewiseRSEI2020_1, 
                style: style_KarjatVillagewiseRSEI2020_1,
                interactive: true,
    title: 'Karjat Villagewise RSEI2020<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_1_0.png" /> 0.3 - 0.40<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_1_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_1_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_1_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2020_1_4.png" /> 0.43 - 0.55<br />'
        });
var format_JamkhedVillagewiseRSEI2020_2 = new ol.format.GeoJSON();
var features_JamkhedVillagewiseRSEI2020_2 = format_JamkhedVillagewiseRSEI2020_2.readFeatures(json_JamkhedVillagewiseRSEI2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JamkhedVillagewiseRSEI2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JamkhedVillagewiseRSEI2020_2.addFeatures(features_JamkhedVillagewiseRSEI2020_2);
var lyr_JamkhedVillagewiseRSEI2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JamkhedVillagewiseRSEI2020_2, 
                style: style_JamkhedVillagewiseRSEI2020_2,
                interactive: true,
    title: 'Jamkhed Villagewise RSEI2020<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_2_0.png" /> 0.2 - 0.35<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_2_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_2_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_2_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/JamkhedVillagewiseRSEI2020_2_4.png" /> 0.43 - 0.515<br />'
        });
var format_KarjatVillagewiseRSEI2015_3 = new ol.format.GeoJSON();
var features_KarjatVillagewiseRSEI2015_3 = format_KarjatVillagewiseRSEI2015_3.readFeatures(json_KarjatVillagewiseRSEI2015_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarjatVillagewiseRSEI2015_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarjatVillagewiseRSEI2015_3.addFeatures(features_KarjatVillagewiseRSEI2015_3);
var lyr_KarjatVillagewiseRSEI2015_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KarjatVillagewiseRSEI2015_3, 
                style: style_KarjatVillagewiseRSEI2015_3,
                interactive: true,
    title: 'Karjat Villagewise RSEI2015<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_0.png" /> 0.2 - 0.35<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_1.png" /> 0.35 - 0.38<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_2.png" /> 0.38 - 0.41<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_3.png" /> 0.41 - 0.43<br />\
    <img src="styles/legend/KarjatVillagewiseRSEI2015_3_4.png" /> 0.43 - 0.515<br />'
        });
var lyr_newrsei2015_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "newrsei2015",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/newrsei2015_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8085599.931787, 1758255.751697, 9005999.500420, 2515593.419534]
                            })
                        });
var lyr_newrsei2020_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "newrsei2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/newrsei2020_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8085599.931787, 1758255.751697, 9005999.500420, 2515593.419534]
                            })
                        });
var format_MaharashtraDistricts_6 = new ol.format.GeoJSON();
var features_MaharashtraDistricts_6 = format_MaharashtraDistricts_6.readFeatures(json_MaharashtraDistricts_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaharashtraDistricts_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaharashtraDistricts_6.addFeatures(features_MaharashtraDistricts_6);
var lyr_MaharashtraDistricts_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaharashtraDistricts_6, 
                style: style_MaharashtraDistricts_6,
                interactive: true,
                title: '<img src="styles/legend/MaharashtraDistricts_6.png" /> Maharashtra Districts'
            });

lyr_Jamkhed_VillagewiseRSEI2015_0.setVisible(true);lyr_KarjatVillagewiseRSEI2020_1.setVisible(true);lyr_JamkhedVillagewiseRSEI2020_2.setVisible(true);lyr_KarjatVillagewiseRSEI2015_3.setVisible(true);lyr_newrsei2015_4.setVisible(true);lyr_newrsei2020_5.setVisible(true);lyr_MaharashtraDistricts_6.setVisible(true);
var layersList = [lyr_Jamkhed_VillagewiseRSEI2015_0,lyr_KarjatVillagewiseRSEI2020_1,lyr_JamkhedVillagewiseRSEI2020_2,lyr_KarjatVillagewiseRSEI2015_3,lyr_newrsei2015_4,lyr_newrsei2020_5,lyr_MaharashtraDistricts_6];
lyr_Jamkhed_VillagewiseRSEI2015_0.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', });
lyr_KarjatVillagewiseRSEI2020_1.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', 'meanRSEI1': 'meanRSEI1', 'meanRSEIfi': 'meanRSEIfi', });
lyr_JamkhedVillagewiseRSEI2020_2.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', });
lyr_KarjatVillagewiseRSEI2015_3.set('fieldAliases', {'GML_ID': 'GML_ID', 'STNAME': 'STNAME', 'DTNAME': 'DTNAME', 'GPNAME': 'GPNAME', 'IPNAME': 'IPNAME', 'STCENSUS': 'STCENSUS', 'DTCENSUS': 'DTCENSUS', 'GPCODE': 'GPCODE', 'IPCODE': 'IPCODE', 'VILLNAME': 'VILLNAME', 'NEWCD2011': 'NEWCD2011', 'VLGCD2001': 'VLGCD2001', 'VLGCD2011': 'VLGCD2011', 'DISTFULL': 'DISTFULL', '_count': '_count', '_sum': '_sum', '_mean': '_mean', 'meanRSEI': 'meanRSEI', });
lyr_MaharashtraDistricts_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_Jamkhed_VillagewiseRSEI2015_0.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', });
lyr_KarjatVillagewiseRSEI2020_1.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', 'meanRSEI1': 'Range', 'meanRSEIfi': 'TextEdit', });
lyr_JamkhedVillagewiseRSEI2020_2.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', });
lyr_KarjatVillagewiseRSEI2015_3.set('fieldImages', {'GML_ID': 'TextEdit', 'STNAME': 'TextEdit', 'DTNAME': 'TextEdit', 'GPNAME': 'TextEdit', 'IPNAME': 'TextEdit', 'STCENSUS': 'Range', 'DTCENSUS': 'TextEdit', 'GPCODE': 'TextEdit', 'IPCODE': 'TextEdit', 'VILLNAME': 'TextEdit', 'NEWCD2011': 'TextEdit', 'VLGCD2001': 'TextEdit', 'VLGCD2011': 'TextEdit', 'DISTFULL': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', 'meanRSEI': 'TextEdit', });
lyr_MaharashtraDistricts_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_Jamkhed_VillagewiseRSEI2015_0.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'no label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', });
lyr_KarjatVillagewiseRSEI2020_1.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'no label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'no label', 'meanRSEI1': 'no label', 'meanRSEIfi': 'inline label', });
lyr_JamkhedVillagewiseRSEI2020_2.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'no label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', });
lyr_KarjatVillagewiseRSEI2015_3.set('fieldLabels', {'GML_ID': 'no label', 'STNAME': 'no label', 'DTNAME': 'no label', 'GPNAME': 'no label', 'IPNAME': 'no label', 'STCENSUS': 'no label', 'DTCENSUS': 'no label', 'GPCODE': 'no label', 'IPCODE': 'no label', 'VILLNAME': 'no label', 'NEWCD2011': 'no label', 'VLGCD2001': 'no label', 'VLGCD2011': 'no label', 'DISTFULL': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', 'meanRSEI': 'inline label', });
lyr_MaharashtraDistricts_6.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_MaharashtraDistricts_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});