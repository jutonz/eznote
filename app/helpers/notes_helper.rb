module NotesHelper
  def left_notes
    favs = current_user.notes.where favorite: true
    favs = [] unless favs
    filled = fill_empty favs
    filled[0..4]
  end

  def right_notes
    favs = current_user.notes.where favorite: true
    favs = [] unless favs
    filled = fill_empty favs
    filled[5..9]
  end

  def fill_empty(notes)
    diff = 5 - notes.size
    diff.times do
      notes.push nil
    end
    return notes
  end
end
