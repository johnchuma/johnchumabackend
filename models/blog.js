'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  Blog.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    tag:{
      type: DataTypes.STRING,
      allowNull:true
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false
    },
    reads:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    likes:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    dislikes:{
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    paragraph1: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    paragraph2: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    paragraph3: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    paragraph4: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    paragraph5: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    conclusion: {
      type: DataTypes.TEXT,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};