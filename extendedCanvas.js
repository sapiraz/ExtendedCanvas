/*
ExtendedCanvas.js by Raz Sapir - 2016
*/

/**
 * Draws a circle path
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
*/
CanvasRenderingContext2D.prototype.circle = function(x,y,radius){
  this.beginPath();
  this.arc(x,y,radius,0,Math.PI * 2);
  this.closePath();
}

/**
 * Draws a polygon path
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
 * @param {number} sides - The number of sides the polygon will have
 * @param {number} angle - Angle in degrees in which the polygon will be rotated
*/
CanvasRenderingContext2D.prototype.polygon = function(x,y,radius,sides,angle){
  var radius 		= radius;
  var position 	= {x:x,y:y};
  var sides 		= sides ? sides : 6;
  var angle			= angle ? angle : 0;
  this.translate(position.x,position.y);
  this.rotate(angle * (Math.PI / 180));
  this.beginPath();
  this.moveTo(radius, 0);
  for(var j = 0; j <= (Math.PI)*2; j+=Math.PI / (sides/2)){
    this.lineTo(radius * Math.cos(j),radius * Math.sin(j));
  }
  this.closePath();
  this.rotate(-angle * (Math.PI / 180));
  this.translate(-position.x,-position.y);
}

/**
 * Draws a star path
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
 * @param {number} sides - The number of sides the star will have
 * @param {number} angle - Angle in degrees in which the star will be rotated
*/
CanvasRenderingContext2D.prototype.star = function(x,y,radius,sides,angle){
  var radius 		= radius;
  var position 	= {x:x,y:y};
  var sides 		= (sides ? sides : 5) * 2;
  var angle			= -90 - (angle ? angle : 0);
  this.translate(position.x,position.y);
  this.rotate(angle * (Math.PI / 180));
  this.beginPath();
  this.moveTo(radius, 0);
  var wobble = 2;
  for(var j = 0; j <= (Math.PI)*2; j+=Math.PI / (sides/2)){
  	wobble = wobble == 1 ? 2 : 1;
    this.lineTo(((radius / (wobble)) * Math.cos(j)),((radius / (wobble)) * Math.sin(j)));
  }
  this.closePath();
  this.rotate(-angle * (Math.PI / 180));
  this.translate(-position.x,-position.y);
}

/**
 * Draws and fills a polygon in the defined fillStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
 * @param {number} sides - The number of sides the polygon will have
 * @param {number} angle - Angle in degrees in which the polygon will be rotated
*/
CanvasRenderingContext2D.prototype.fillPolygon = function(x,y,radius,sides,angle){
  this.polygon(x,y,radius,sides,angle);
  this.fill();
}

/**
 * Draws and outlines a polygon in the defined strokeStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
 * @param {number} sides - The number of sides the polygon will have
 * @param {number} angle - Angle in degrees in which the polygon will be rotated
*/
CanvasRenderingContext2D.prototype.strokePolygon = function(x,y,radius,sides,angle){
  this.polygon(x,y,radius,sides,angle);
  this.stroke();
}

/**
 * Draws and fills a triangle in the defined fillStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the triangle
 * @param {number} angle - Angle in degrees in which the triangle will be rotated
*/
CanvasRenderingContext2D.prototype.fillTriangle = function(x,y,radius,angle){
  this.polygon(x,y,radius,3,angle ? angle : -90);
  this.fill();
}

/**
 * Draws and outlines a triangle in the defined strokeStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the triangle
 * @param {number} angle - Angle in degrees in which the triangle will be rotated
*/
CanvasRenderingContext2D.prototype.strokeTriangle = function(x,y,radius,angle){
  this.polygon(x,y,radius,3,angle ? angle : -90);
  this.stroke();
}

/**
 * Draws and fills a circle in the defined fillStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
*/
CanvasRenderingContext2D.prototype.fillCircle = function(x,y,radius){
  this.circle(x,y,radius);
  this.fill();
}

/**
 * Draws and outlines a circle in the defined strokeStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the circle
*/
CanvasRenderingContext2D.prototype.strokeCircle = function(x,y,radius){
  this.circle(x,y,radius);
  this.stroke();
}

/**
 * Draws and fills a 5 sided star in the defined fillStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the star
*/
CanvasRenderingContext2D.prototype.fillStar = function(x,y,radius){
  this.star(x,y,radius,5);
  this.fill();
}

/**
 * Draws and outlines a 5 sided star in the defined strokeStyle
 * @param {number} x - Position on the X axis
 * @param {number} y - Position on the Y axis
 * @param {number} radius - The radius of the star
*/
CanvasRenderingContext2D.prototype.strokeStar = function(x,y,radius){
  this.star(x,y,radius,5);
  this.stroke();
}
