-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2018 at 01:24 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aquae`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `addr` varchar(250) NOT NULL,
  `cont_num` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `fname`, `lname`, `username`, `email`, `password`, `addr`, `cont_num`) VALUES
(12, '', '', 'julius', 'jaybuenavista@rocketmail.com', 'f6122c971aeb03476bf01623b09ddfd4', '0', '0'),
(13, '', '', 'asas', 'asas@gmail.com', 'f970e2767d0cfe75876ea857f92e319b', '0', '0'),
(14, '', '', 'wa', 'wala@gmail.com', '37072d294fa0494fc8df4af1e8499a35', '0', '0'),
(15, '', '', 'julius1', 'jaybuen2avista@rocketmail.com', 'c20ad4d76fe97759aa27a0c99bff6710', '0', '0'),
(16, '', '', 'har', 'har@gmail.com', '0a8005f5594bd67041f88c6196192646', '0', '0'),
(17, '', '', 'we', 'we@gmail.com', 'b787d22d9cb06342658bf546039117bc', '0', '0'),
(18, '', '', 'aqualab', 'jaybuenavista133@rocketmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0', '0'),
(19, '', '', 'henrick', 'henrcik@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0', '0'),
(20, 'alonah', 'enad', 'alonah', 'alonah@rocketmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0', '09232323'),
(22, 'Julius', 'Buenavista', 'julius10', 'Julius@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '0', '09331422193');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
