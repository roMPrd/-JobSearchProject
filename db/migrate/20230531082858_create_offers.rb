class CreateOffers < ActiveRecord::Migration[7.0]
  def change
    create_table :offers do |t|
      t.string :job_title
      t.string :company_name
      t.string :job_location
      t.string :company_info
      t.date :send_date
      t.string :application_letter
      t.string :cv
      t.boolean :archived, default: 0, null: false
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
