class RemoveQuestionMarkFromFavoriteNotes < ActiveRecord::Migration
  def change
    rename_column :notes, :favorite?, :favorite
  end
end
