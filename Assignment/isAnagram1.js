function isAnagram(str1, str2) {
  // Helper function to clean and sort a string
  const cleanAndSort = (str) => str.replace(/\s/g, '').toLowerCase().split('').sort().join('');

  // Compare the cleaned and sorted strings
  return cleanAndSort(str1) === cleanAndSort(str2);
}

module.exports = isAnagram;
