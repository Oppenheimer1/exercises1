puts "Enter your file name"
new_file = gets.chomp
dic_array = []
s = File.open('sequences', 'w')
w = File.open('words', 'w')
a = File.open(new_file) do |f|
	f.each_line do |x|
		if x.chomp.length >= 4
			dic_array << x.chomp
		end
	end
	sequences = Hash.new { |hash, key| hash[key] = [] }
	dic_array.each do |z|
		n = z.length - 3
		n.times do |i|
			sequences[z[i..(i+3)]] << z
		end
	end
	sequences.each do |key, value|
		if value.uniq.size == 1
			w.puts value.uniq.first
			s.puts key
		end
	end
	w.close
	s.close
	puts "Files Words and Sequences have been created"
end