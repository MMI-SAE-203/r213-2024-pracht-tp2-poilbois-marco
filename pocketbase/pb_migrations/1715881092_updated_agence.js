/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7i0nic6ubu5js63")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8caol2k",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7i0nic6ubu5js63")

  // remove
  collection.schema.removeField("y8caol2k")

  return dao.saveCollection(collection)
})
