class CreateBugs < ActiveRecord::Migration[5.0]
  def change
    create_table :bugs do |t|
      t.string :title
      t.timestamp :deadline
      t.string :type
      t.string :status

      t.timestamps
    end
  end
end
