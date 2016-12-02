class Bug < ApplicationRecord
  # enum status: [:new, :started, :completed]
  # after_save :set_default_role, :if => :new_record?

  # def set_default_role
  #   self.role ||= :new
  # end

  # enum type: [:feature, :bug]
  # after_save :set_default_role, :if => :new_record?

  # def set_default_role
  #   self.role ||= :feature
  # end

  belongs_to :project

end
