/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7i0nic6ubu5js63")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vt38kl3d",
    "name": "maison",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "tdfafccu8qg1y69",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7i0nic6ubu5js63")

  // remove
  collection.schema.removeField("vt38kl3d")

  return dao.saveCollection(collection)
})
