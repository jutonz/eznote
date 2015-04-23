module NotesHelper
  def left_notes
    # notes = current_user.notes[0..4] || []
    # favorites = (current_user.notes.find_by favorite: true)[0..4] || []
    # fill_empty favoritesNote.de
    favs = current_user.notes.where favorite: true
    favs = [] unless favs
    # favorites = (current_user.notes.find_by favorite: true)[5..9] || []
    filled = fill_empty favs
    filled[0..4]
  end

  def right_notes
    # notes = current_user.notes[5..9] || []
    favs = current_user.notes.where favorite: true
    favs = [] unless favs
    # favorites = (current_user.notes.find_by favorite: true)[5..9] || []
    filled = fill_empty favs
    filled[5..9]
  end

  def fill_empty(notes)
    # unless notes != nil
    #   notes = []
    # end
    # begin
    #   notes.size
    # rescue NoMethodError
    #   note = notes
    #   notes = []
    #   notes << note
    # end

    diff = 5 - notes.size
    diff.times do
      notes.push nil
    end
    return notes
  end
end
