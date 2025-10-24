import Mixin from 'mixmatch';

export default class SerialBatchUpdate extends Mixin {
  async serialBatchUpdate(ids, attributes, changesetOptions = {}) {
    // Create a changeset for this bulk operation
    const changesetObj = {
      form_id: attributes.form_id || changesetOptions.form_id,
      metadata: changesetOptions.metadata || {
        app: 'fulcrum-js',
        operation: 'serial_batch_update'
      }
    };

    const changeset = await this.client.changesets.create(changesetObj);

    // Update each record with the changeset_id
    const updatedRecords = [];
    
    for (const id of ids) {
      const recordAttributes = {
        ...attributes,
        changeset_id: changeset.id
      };
      
      const options = {
        body: this.attributesForObject(recordAttributes)
      };

      const body = await this.client.api.put(this.memberPath(id), options);
      updatedRecords.push(body[this.resourceName]);
    }

    // Close the changeset
    await this.client.changesets.close(changeset.id);

    return updatedRecords;
  }
}
