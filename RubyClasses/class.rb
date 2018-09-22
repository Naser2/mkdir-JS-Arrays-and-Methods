#
# bank_account1 = {
# 	account_number: "123abc",
# 	amoumt: 1.00,
# 	accout_type: "saving"
# },
#
# bank_account2 = {
# 	account_number: "345abc",
# 	amoumt: 1.00,
# 	accout_type: "checking"
# }
#
# bank_account3 = {
# 	account_number: "234Bgh",
# 	amoumt: 1.00,
# 	accout_type: "saving"
# }

class BankAccount
	#attributes: account_number etc...
	def initialize(account_number, amount, type)
		@account_number = account_number,
		@amount = amount,
		@type = type
	end

	def show_balance
		return @amount
	end

  def account_number
		return @account_number
	end

  def account_type
		return @account_type
	end

end
puts nas =  BankAccount.new("123abc", 1.00, "saving")
puts nas.show_balance + 30.0
