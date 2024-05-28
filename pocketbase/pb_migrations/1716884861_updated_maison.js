/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tdfafccu8qg1y69")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psmbgv3q",
    "name": "agence",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7i0nic6ubu5js63",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tdfafccu8qg1y69")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "psmbgv3q",
    "name": "agence",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7i0nic6ubu5js63",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
