/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7i0nic6ubu5js63")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dlj785xi",
    "name": "email",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7i0nic6ubu5js63")

  // remove
  collection.schema.removeField("dlj785xi")

  return dao.saveCollection(collection)
})
