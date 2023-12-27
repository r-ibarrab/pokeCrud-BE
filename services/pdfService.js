const PDFDocument = require("pdfkit")

const createPDF = (onWrite,onEnd,pokemon) => {
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

    doc.on('data', onWrite);
    doc.on('end', onEnd);
  
    doc.fontSize(20).text(`Pokemon Name: ${pokemon.name}`);
  
    doc
      .fontSize(12)
      .text(
        `Power: ${pokemon.power}`
      );
    doc
    .fontSize(12)
    .text(
      `Is Main series?: ${pokemon.isMainSeries ? "Yes" : "No"}`
    );
    doc.end();
}

module.exports = {createPDF}