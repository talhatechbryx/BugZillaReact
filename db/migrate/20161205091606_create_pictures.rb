class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.belongs_to :photoable, polymorphic: true

      t.timestamps
    end
    add_index :photos, [:photoable_id, :photoable_type]
  end
end
